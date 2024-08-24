import BoardDetailUI from "./BoardDetail.presenter"
import { useRouter } from "next/router"
import { useQuery, useMutation, ApolloError } from "@apollo/client"
import { FETCH_BOARD, DELETE_BOARD, CREATE_BOARD_COMMENT, FETCH_BOARD_COMMENTS, LIKE_BOARD, DISLIKE_BOARD, DELETE_BOARD_COMMENT, UPDATE_BOARD_COMMENT } from "./BoardDetail.queries";
import { useState, ChangeEvent, MouseEvent } from "react";
import { CreateBoardCommentInput, UpdateBoardCommentInput, FetchBoardCommentsData, FetchBoardData } from "./BoardDetail.types";

export default function BoardDetail(){
    const router = useRouter();

    const [deleteBoard] = useMutation(DELETE_BOARD);
    const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
    const [likeBoard] = useMutation(LIKE_BOARD);
    const [dislikeBoard] = useMutation(DISLIKE_BOARD);
    const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
    const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

    const [isCommentInputOpen, setIsCommentInputOpen] = useState<boolean>(true)
    const [commentWriter, setCommentWriter] = useState<string>("");
    const [commentPassword, setCommentPassword] = useState<string>("");
    const [commentContent, setCommentContent] = useState<string>("");
    const [commentContentLength, setCommentContentLength] = useState<number>(0);
    
    const [starRating , setStarRating ] = useState<number>(0);

    const [likeCount, setLikeCount] = useState<number>(0);
    const [dislikeCount, setDislikeCount] = useState<number>(0);

    const [modalMode , setModalMode] = useState<string>("");
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [boardCommentId, setBoardCommentId] = useState<string>("");
    const [commentDeletePassword, setCommentDeletePassword] = useState<string>("");
    const [commentUpdatePassword, setCommentUpdatePassword] = useState<string>("");

    // commentEditingId === null: 현재 수정 중인 댓글이 없음
    // commentEditingId !== null: 현재 수정 중인 댓글이 있음 -> 댓글 수정 창 활성화
    const [commentEditingId, setCommentEditingId] = useState<string | null>(null);

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

    const onClickMoveToListPage = (): void => {
        router.push(`/boards/list/1`);    
    }

    const onClickMoveToEditPage = (): void => {
        router.push(`/boards/edit/${router.query.boardId}`);    
    }

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

    const resetCommentInput = (): void => {
        setCommentWriter("");
        setCommentPassword("");
        setStarRating(0);
        setCommentContent("");
        setCommentContentLength(0);
        setIsCommentInputOpen(false);
        setIsCommentInputOpen(true);
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

    const onClickStarRatingIncrease = (event: MouseEvent<SVGElement>): void => {
        setStarRating((starRating ?? 0)+1)
    }

    const onClickStarRatingDecrease = (event: MouseEvent<SVGElement>): void  => {
        setStarRating((starRating ?? 0)-1)
    }

    const onInputCommentDeletePassword = (event: ChangeEvent<HTMLInputElement>): void => {
        setCommentDeletePassword(event.target.value);
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
            onToggleModal();
            setModalMode("")
            alert("댓글이 삭제되었습니다.")
        } catch(error){
            if (error instanceof ApolloError) {
                alert(error.message);
            } 
        }
    }

    // onToggleModal() -> deletePassword, updatePassword, commentContent, starRating 초기화
    const onToggleModal = (): void => {
        setIsModalOpen((prev) => !prev);
        setCommentDeletePassword("")
        setCommentUpdatePassword("")
        setCommentContent("");
        setStarRating(0);
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
        setStarRating(rating); // modal 활성화 이후, rating값 업데이트
    }
    
    const onInputCommentUpdatePassword = (event: ChangeEvent<HTMLInputElement>): void => {
        setCommentUpdatePassword(event.target.value);
    }

    const onClickUpdateComment = async(event: MouseEvent<HTMLButtonElement>): Promise<void> => {
        const updateBoardCommentInput: UpdateBoardCommentInput = {
            contents: commentContent,
            rating: starRating
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
            onToggleModal();
            setModalMode("")
            alert("댓글이 수정되었습니다.")
        } catch(error) {
            if (error instanceof ApolloError) {
                alert(error.message);
            } 
        }
    }

    return (
        <div>
            <BoardDetailUI
            fetchBoardData={fetchBoardData}
            fetchBoardCommentsData={fetchBoardCommentsData}

            commentContentLength={commentContentLength}
            starRating={starRating}
            likeCount={likeCount}
            dislikeCount={dislikeCount}
            isModalOpen={isModalOpen}
            isCommentInputOpen={isCommentInputOpen}
            modalMode={modalMode}

            onClickMoveToListPage={onClickMoveToListPage}
            onClickMoveToEditPage={onClickMoveToEditPage}
            onClickDeleteBoard={onClickDeleteBoard}
            onClickSubmitComment={onClickSubmitComment}
            onClickLike={onClickLike}
            onClickDislike={onClickDislike}
            onClickStarRatingIncrease={onClickStarRatingIncrease}
            onClickStarRatingDecrease={onClickStarRatingDecrease}
            onClickDeleteComment={onClickDeleteComment}
            onClickOpenDeleteModal={onClickOpenDeleteModal}
            onClickOpenEditModal={onClickOpenEditModal}
            onClickUpdateComment={onClickUpdateComment}

            onInputCommentWriter={onInputCommentWriter}
            onInputCommentPassword={onInputCommentPassword}
            onInputCommentContent={onInputCommentContent}
            onInputCommentDeletePassword={onInputCommentDeletePassword}
            onInputCommentUpdatePassword={onInputCommentUpdatePassword}

            onToggleModal={onToggleModal}
            />
        </div>
        )
}