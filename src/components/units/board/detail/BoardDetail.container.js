import BoardDetailUI from "./BoardDetail.presenter"
import { useRouter } from "next/router"
import { useQuery, useMutation } from "@apollo/client"
import { FETCH_BOARD, DELETE_BOARD, CREATE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from "./BoardDetail.queries";
import { useState } from "react";

export default function BoardDetail(){
    const router = useRouter();

    const [deleteBoard] = useMutation(DELETE_BOARD);
    const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT)

    const [commentContent, setCommentContent] = useState("");
    const [commentContentLength, setCommentContentLength] = useState(0);
    const [starRating , setStarRating ] = useState(0);

    const {data: boardData} = useQuery(FETCH_BOARD, {
        variables: {
            boardId: router.query.boardId
        }
    })
    
    const {data: boardCommentData} = useQuery(FETCH_BOARD_COMMENTS, {
        variables:{
            page: 1,
            boardId: router.query.boardId
        }
    })

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
            alert(error.message);
        }
    }

    const onInputCommentContent = (event) => {
        setCommentContent(event.target.value);
        setCommentContentLength(event.target.value.length)
    }

    const onClickSubmitComment = async() => {
        const createBoardCommentInput = {};

        createBoardCommentInput.contents = commentContent;
        createBoardCommentInput.rating = starRating;

        try {
            const result = await createBoardComment({
                variables: {
                    boardId: router.query.boardId,
                    createBoardCommentInput
                }
            })
            router.reload();
        } catch(error){
            console.log(error.message);
        }

    }

    return (
        <div>
            <BoardDetailUI
            boardData={boardData}
            boardCommentData={boardCommentData}
            onClickMoveToListPage={onClickMoveToListPage}
            onClickMoveToEditPage={onClickMoveToEditPage}
            onClickDelete={onClickDelete}
            onInputCommentContent={onInputCommentContent}
            onClickSubmitComment={onClickSubmitComment}
            commentContentLength={commentContentLength}
            starRating={starRating}
            setStarRating={setStarRating}
            />
        </div>
    )
}