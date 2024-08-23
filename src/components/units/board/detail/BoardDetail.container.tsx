import BoardDetailUI from "./BoardDetail.presenter"
import { useRouter } from "next/router"
import { useQuery, useMutation, ApolloError } from "@apollo/client"
import { FETCH_BOARD, DELETE_BOARD, CREATE_BOARD_COMMENT, FETCH_BOARD_COMMENTS, LIKE_BOARD, DISLIKE_BOARD, DELETE_BOARD_COMMENT } from "./BoardDetail.queries";
import { useState, ChangeEvent, MouseEvent } from "react";
import { CreateBoardCommentInput, FetchBoardCommentsData, FetchBoardData } from "./BoardDetail.types";

export default function BoardDetail(){
    const router = useRouter();

    const [deleteBoard] = useMutation(DELETE_BOARD);
    const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
    const [likeBoard] = useMutation(LIKE_BOARD);
    const [dislikeBoard] = useMutation(DISLIKE_BOARD);
    const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

    const [isCommentInputOpen, setIsCommentInputOpen] = useState<boolean>(true)
    const [commentWriter, setCommentWriter] = useState<string>("");
    const [commentPassword, setCommentPassword] = useState<string>("");
    const [commentContent, setCommentContent] = useState<string>("");
    const [commentContentLength, setCommentContentLength] = useState<number>(0);
    
    const [starRating , setStarRating ] = useState<number>(0);

    const [likeCount, setLikeCount] = useState<number>(0);
    const [dislikeCount, setDislikeCount] = useState<number>(0);

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [commentDeletePassword, setCommentDeletePassword] = useState<string>("");
    const [boardCommentId, setBoardCommentId] = useState<string>("");

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
            // router.reload();
            alert("댓글이 삭제되었습니다.")
        } catch(error){
            if (error instanceof ApolloError) {
                alert(error.message);
            } 
        }
    }

    const onToggleModal = (): void => {
        setIsModalOpen((prev) => !prev);
    }

    const onClickOpenDeleteModal = (_id: string): void => {
        setCommentDeletePassword("")
        setBoardCommentId(_id);
        onToggleModal();
    }

    const onInputCommentDeletePassword = (event: ChangeEvent<HTMLInputElement>): void => {
        setCommentDeletePassword(event.target.value);
    }

    return (
        <div>
            <BoardDetailUI
            fetchBoardData={fetchBoardData}
            fetchBoardCommentsData={fetchBoardCommentsData}
            commentContentLength={commentContentLength}
            starRating={starRating}
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
            onInputCommentWriter={onInputCommentWriter}
            onInputCommentPassword={onInputCommentPassword}
            onInputCommentContent={onInputCommentContent}
            onInputCommentDeletePassword={onInputCommentDeletePassword}
            setStarRating={setStarRating}
            onToggleModal={onToggleModal}
            likeCount={likeCount}
            dislikeCount={dislikeCount}
            isModalOpen={isModalOpen}
            isCommentInputOpen={isCommentInputOpen}
            />
        </div>
        )
}