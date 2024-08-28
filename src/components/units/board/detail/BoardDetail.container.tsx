import BoardDetailUI from "./BoardDetail.presenter"
import { useRouter } from "next/router"
import { useQuery, useMutation, ApolloError } from "@apollo/client"
import { FETCH_BOARD, DELETE_BOARD, CREATE_BOARD_COMMENT, FETCH_BOARD_COMMENTS, LIKE_BOARD, DISLIKE_BOARD, DELETE_BOARD_COMMENT, UPDATE_BOARD_COMMENT } from "./BoardDetail.queries";
import { useState, ChangeEvent, MouseEvent } from "react";
import { CreateBoardCommentInput, UpdateBoardCommentInput, FetchBoardCommentsData, FetchBoardData } from "./BoardDetail.types";

export default function BoardDetail(){
    const router = useRouter();
    
    // 1. State Variables
    const [commentWriter, setCommentWriter] = useState<string>("");
    const [commentPassword, setCommentPassword] = useState<string>("");
    const [commentContent, setCommentContent] = useState<string>("");
    const [commentContentLength, setCommentContentLength] = useState<number>(0);
    const [starRating , setStarRating] = useState<number>(0);
    const [editStarRating, setEditStarRating] = useState<number>(0);
    const [likeCount, setLikeCount] = useState<number>(0);
    const [dislikeCount, setDislikeCount] = useState<number>(0);
    const [modalMode , setModalMode] = useState<string>("");
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [boardCommentId, setBoardCommentId] = useState<string>("");
    const [commentDeletePassword, setCommentDeletePassword] = useState<string>("");
    const [commentUpdatePassword, setCommentUpdatePassword] = useState<string>("");
    const [commentUpdateContent, setCommentUpdateContent] = useState<string>("");
    // commentEditingId === null: 현재 수정 중인 댓글이 없음
    // commentEditingId !== null: 현재 수정 중인 댓글이 있음 -> 댓글 수정 창 활성화
    const [commentEditingId, setCommentEditingId] = useState<string | null>(null);

    // 2. GraphQL Queries and Mutations
    const [deleteBoard] = useMutation(DELETE_BOARD);
    const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
    const [likeBoard] = useMutation(LIKE_BOARD);
    const [dislikeBoard] = useMutation(DISLIKE_BOARD);
    const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
    const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

    const {data: fetchBoardData} = useQuery<FetchBoardData>(FETCH_BOARD, {
        variables: {
            boardId: router.query.boardId
        },
        onCompleted: (fetchBoardData) => {
            setLikeCount(fetchBoardData.fetchBoard.likeCount);
            setDislikeCount(fetchBoardData.fetchBoard.dislikeCount);
        }
    });
    
    const {data: fetchBoardCommentsData} = useQuery<FetchBoardCommentsData>(FETCH_BOARD_COMMENTS, {
        variables:{
            page: 1,
            boardId: router.query.boardId
        }
    });


    // 3. Event Handlers (Click Handlers)
    const onClickDeleteBoard = async(): Promise<void> => {
        try {
            await deleteBoard({
                variables: {
                    boardId: router.query.boardId
                }
            });
            alert("게시물이 삭제되었습니다.");
            router.push("/boards/list/1");
        } catch (error) {
            if (error instanceof ApolloError) {
                alert(error.message);
            }
        }
    }

    const onClickLike = async(): Promise<void> => {
        try {
            const result = await likeBoard({
                variables: {
                    boardId: router.query.boardId
                }
            })
            setLikeCount(result.data?.likeBoard);
        } catch(error){
            if (error instanceof ApolloError) {
                console.log(error.message);
            } 
        }
    }

    const onClickDislike = async(): Promise<void> => {
        try {
            const result = await dislikeBoard({
                variables: {
                    boardId: router.query.boardId
                }
            })
            setDislikeCount(result.data?.dislikeBoard);
        } catch(error){
            if (error instanceof ApolloError) {
                console.log(error.message);
            } 
        }
    }

    const onClickSubmitComment = async(): Promise<void> => {
        const createBoardCommentInput: CreateBoardCommentInput = {
            writer: commentWriter,
            password: commentPassword,
            contents: commentContent,
            rating: starRating
        };

        // 댓글을 등록하려면 작성자, 비밀번호, 내용이 모두 필수로 입력
        if (commentWriter && commentPassword && commentContent) {
            try {
                const result = await createBoardComment({
                    variables: {
                        boardId: router.query.boardId,
                        createBoardCommentInput
                    },
                    refetchQueries: [
                      {
                        query: FETCH_BOARD_COMMENTS,
                        variables: { 
                            page: 1,
                            boardId: router.query.boardId
                        }
                      }
                    ]
                });
                resetCommentInput();
            } catch(error){
                if (error instanceof ApolloError) {
                    console.log(error.message);
                }
            }
        } else if (!commentWriter) {
            alert("작성자를 입력해주세요.")
        } else if (!commentPassword) {
            alert("비밀번호를 입력해주세요.")
        } else if(!commentContent) {
            alert("내용을 입력해주세요.")
        }
    }

    const onClickDeleteComment = async(event: MouseEvent<HTMLButtonElement>): Promise<void> => {
        try {
            await deleteBoardComment({
                variables: {
                    boardCommentId: boardCommentId,
                    password: commentDeletePassword
                },
                refetchQueries: [
                  {
                    query: FETCH_BOARD_COMMENTS,
                    variables: { 
                        page: 1,
                        boardId: router.query.boardId
                    }
                  }
                ]
            });
            onCommentActionSuccess("게시물이 삭제되었습니다.");
        } catch(error){
            if (error instanceof ApolloError) {
                alert(error.message);
            } 
        }
    }


    const onClickUpdateComment = async(event: MouseEvent<HTMLButtonElement>): Promise<void> => {
        const updateBoardCommentInput: UpdateBoardCommentInput = {
            contents: commentUpdateContent,
            rating: editStarRating
        };

        try {
            await updateBoardComment({
                variables: {
                    updateBoardCommentInput: updateBoardCommentInput,
                    boardCommentId: boardCommentId,
                    password: commentUpdatePassword
                },
                refetchQueries: [
                  {
                    query: FETCH_BOARD_COMMENTS,
                    variables: { 
                        page: 1,
                        boardId: router.query.boardId
                    }
                  }
                ]
            });
            onCommentActionSuccess("댓글이 수정되었습니다.")
        } catch(error) {
            if (error instanceof ApolloError) {
                alert(error.message);
            } 
        }
    }

    const onClickMoveToListPage = (): void => {
        router.push(`/boards/list/1`);    
    }

    const onClickMoveToEditPage = (): void => {
        router.push(`/boards/edit/${router.query.boardId}`);    
    }

    const onClickStarRatingIncrease = (event: MouseEvent<SVGElement>): void => {
        setStarRating((starRating ?? 0)+1)
    }

    const onClickStarRatingDecrease = (event: MouseEvent<SVGElement>): void  => {
        setStarRating((starRating ?? 0)-1)
    }
    
    const onClickEditStarRatingIncrease = (event: MouseEvent<SVGElement>): void  => {
        setEditStarRating((editStarRating ?? 0)+1)
    }
    
    const onClickEditStarRatingDecrease = (event: MouseEvent<SVGElement>): void  => {
        setEditStarRating((editStarRating ?? 0)-1)
    }

    const onClickOpenDeleteModal = (_id: string): void => {
        setModalMode("DELETE");
        setBoardCommentId(_id);
        onToggleModal(); 
    }

    const onClickOpenEditModal = (_id: string, rating: number): void => {
        setModalMode("EDIT");
        setBoardCommentId(_id);
        onToggleModal();
        setEditStarRating(rating); // modal 활성화 이후, rating값 업데이트
        
    }

    // 4. Event Handlers (Input Handlers)
    const onInputCommentWriter = (event: ChangeEvent<HTMLInputElement>): void => {
        setCommentWriter(event.target.value);
    }

    const onInputCommentPassword = (event: ChangeEvent<HTMLInputElement>): void => {
        setCommentPassword(event.target.value);
    }

    const onInputCommentContent = (event: ChangeEvent<HTMLInputElement>): void => {
        setCommentContent(event.target.value);
        setCommentContentLength(event.target.value.length)
    }

    const onInputCommentDeletePassword = (event: ChangeEvent<HTMLInputElement>): void => {
        setCommentDeletePassword(event.target.value);
    }
    
    const onInputCommentContentUpdate = (event: ChangeEvent<HTMLInputElement>): void => {
        setCommentUpdateContent(event.target.value);
    }

    const onInputCommentUpdatePassword = (event: ChangeEvent<HTMLInputElement>): void => {
        setCommentUpdatePassword(event.target.value);
    }

    // 5. Helper Functions
    const resetCommentInput = (): void => {
        setCommentWriter("");
        setCommentPassword("");
        setCommentContent("");
        setCommentContentLength(0);
        setStarRating(0);
    }

    const onToggleModal = (): void => {
        // onToggleModal() -> 댓글 등록 정보 및, 모달(Delete, Update) 관련 Password 삭제
        setIsModalOpen((prev) => !prev);
        setCommentDeletePassword("")
        setCommentUpdatePassword("")
        resetCommentInput();
    }

    const onCommentActionSuccess = (alertMessage: string): void => {
        onToggleModal();
        setModalMode("")
        alert(alertMessage)
    }

    return (
        <div>
            <BoardDetailUI
            fetchBoardData={fetchBoardData}
            fetchBoardCommentsData={fetchBoardCommentsData}
            commentWriter={commentWriter}
            commentPassword={commentPassword}
            commentContent={commentContent}
            commentContentLength={commentContentLength}
            starRating={starRating}
            editStarRating={editStarRating}
            likeCount={likeCount}
            dislikeCount={dislikeCount}
            isModalOpen={isModalOpen}
            modalMode={modalMode}
            onClickMoveToListPage={onClickMoveToListPage}
            onClickMoveToEditPage={onClickMoveToEditPage}
            onClickDeleteBoard={onClickDeleteBoard}
            onClickSubmitComment={onClickSubmitComment}
            onClickLike={onClickLike}
            onClickDislike={onClickDislike}
            onClickStarRatingIncrease={onClickStarRatingIncrease}
            onClickStarRatingDecrease={onClickStarRatingDecrease}
            onClickEditStarRatingIncrease={onClickEditStarRatingIncrease}
            onClickEditStarRatingDecrease={onClickEditStarRatingDecrease}
            onClickDeleteComment={onClickDeleteComment}
            onClickOpenDeleteModal={onClickOpenDeleteModal}
            onClickOpenEditModal={onClickOpenEditModal}
            onClickUpdateComment={onClickUpdateComment}
            onInputCommentWriter={onInputCommentWriter}
            onInputCommentPassword={onInputCommentPassword}
            onInputCommentContent={onInputCommentContent}
            onInputCommentDeletePassword={onInputCommentDeletePassword}
            onInputCommentUpdatePassword={onInputCommentUpdatePassword}
            onInputCommentContentUpdate={onInputCommentContentUpdate}
            onToggleModal={onToggleModal}
            />
        </div>
        )
}