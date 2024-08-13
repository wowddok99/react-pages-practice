import BoardDetailUI from "./BoardDetail.presenter"
import { useRouter } from "next/router"
import { useQuery, useMutation, ApolloError } from "@apollo/client"
import { FETCH_BOARD, DELETE_BOARD, CREATE_BOARD_COMMENT, FETCH_BOARD_COMMENTS, LIKE_BOARD, DISLIKE_BOARD } from "./BoardDetail.queries";
import { useState, ChangeEvent } from "react";
import { createBoardCommentInput } from "./BoardDetail.types";

export default function BoardDetail(){
    const router = useRouter();

    const [deleteBoard] = useMutation(DELETE_BOARD);
    const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
    const [likeBoard] = useMutation(LIKE_BOARD);
    const [dislikeBoard] = useMutation(DISLIKE_BOARD);

    const [commentContent, setCommentContent] = useState("");
    const [commentContentLength, setCommentContentLength] = useState(0);
    const [starRating , setStarRating ] = useState(0);
    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);


    const {data: fetchBoardData} = useQuery(FETCH_BOARD, {
        variables: {
            boardId: router.query.boardId
        },
        onCompleted: (fetchBoardData) => {
            setLikeCount(fetchBoardData.fetchBoard?.likeCount);
            setDislikeCount(fetchBoardData.fetchBoard?.dislikeCount);
        }
    });
    
    const {data: fetchBoardCommentsData} = useQuery(FETCH_BOARD_COMMENTS, {
        variables:{
            page: 1,
            boardId: router.query.boardId
        }
    });

    const onClickMoveToListPage = () => {
        router.push(`/boards/list/1`);    
    }

    const onClickMoveToEditPage = () => {
        router.push(`/boards/edit/${router.query.boardId}`);    
    }

    const onClickDelete = async() => {
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

    const onInputCommentContent = (event: ChangeEvent<HTMLInputElement>) => {
        setCommentContent(event.target.value);
        setCommentContentLength(event.target.value.length)
    }

    const onClickSubmitComment = async() => {
        const createBoardCommentInput: createBoardCommentInput = {
            contents: commentContent,
            rating: starRating
        };

        try {
            const result = await createBoardComment({
                variables: {
                    boardId: router.query.boardId,
                    createBoardCommentInput
                }
            })
            router.reload();
        } catch(error){
            if (error instanceof ApolloError) {
                console.log(error.message);
            }
        }

    }

    const onClickLike = async() => {
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

    const onClickDislike = async() => {
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

    return (
        <div>
            <BoardDetailUI
            fetchBoardData={fetchBoardData}
            fetchBoardCommentsData={fetchBoardCommentsData}
            commentContentLength={commentContentLength}
            starRating={starRating}
            onClickMoveToListPage={onClickMoveToListPage}
            onClickMoveToEditPage={onClickMoveToEditPage}
            onClickDelete={onClickDelete}
            onClickSubmitComment={onClickSubmitComment}
            onClickLike={onClickLike}
            onClickDislike={onClickDislike}
            onInputCommentContent={onInputCommentContent}
            setStarRating={setStarRating}
            likeCount={likeCount}
            dislikeCount={dislikeCount}
            />
        </div>
        )
}