import { ApolloError, useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, MouseEvent, useState } from "react";
import { FETCH_BOARD_COMMENTS, DELETE_BOARD_COMMENT, UPDATE_BOARD_COMMENT } from "./BoardCommentList.queries";
import { FetchBoardCommentsData, UpdateBoardCommentInput } from "./BoardCommentList.types";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { useRouter } from "next/router";

export default function BoardCommentList(){
    const router = useRouter();

    // 1. State Variables
    const [boardCommentId, setBoardCommentId] = useState<string>("");
    const [editStarRating, setEditStarRating] = useState<number>(0);
    const [modalMode , setModalMode] = useState<string>("");
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const [commentDeletePassword, setCommentDeletePassword] = useState<string>("");
    const [commentUpdatePassword, setCommentUpdatePassword] = useState<string>("");
    const [commentUpdateContent, setCommentUpdateContent] = useState<string>("");

    // 2. GraphQL Queries and Mutations
    const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
    const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

        
    const {data: fetchBoardCommentsData} = useQuery<FetchBoardCommentsData>(FETCH_BOARD_COMMENTS, {
        variables:{
            page: 1,
            boardId: router.query.boardId
        }
    });

    // 3. Event Handlers (Click Handlers)
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

    const onClickEditStarRatingIncrease = (event: MouseEvent<SVGElement>): void  => {
        setEditStarRating((editStarRating ?? 0)+1)
    }
    
    const onClickEditStarRatingDecrease = (event: MouseEvent<SVGElement>): void  => {
        setEditStarRating((editStarRating ?? 0)-1)
    }
    
    // 4. Event Handlers (Input Handlers)
    const onInputCommentDeletePassword = (event: ChangeEvent<HTMLInputElement>): void => {
        setCommentDeletePassword(event.target.value);
    }
    
    const onInputCommentEditContent = (event: ChangeEvent<HTMLInputElement>): void => {
        setCommentUpdateContent(event.target.value);
    }

    const onInputCommentEditPassword = (event: ChangeEvent<HTMLInputElement>): void => {
        setCommentUpdatePassword(event.target.value);
    }

    // 5. Helper Functions
    const onToggleModal = (): void => {
        // onToggleModal() -> 댓글 등록 정보 및, 모달(Delete, Update) 관련 Password 삭제
        setIsModalOpen((prev) => !prev);
        setCommentDeletePassword("")
        setCommentUpdatePassword("")
    }
    
    const onCommentActionSuccess = (alertMessage: string): void => {
        onToggleModal();
        setModalMode("")
        alert(alertMessage)
    }

    return (
        <div>
            <BoardCommentListUI
            fetchBoardCommentsData={fetchBoardCommentsData}
            editStarRating={editStarRating}
            isModalOpen={isModalOpen}
            modalMode={modalMode}

            onClickEditStarRatingIncrease={onClickEditStarRatingIncrease}
            onClickEditStarRatingDecrease={onClickEditStarRatingDecrease}
            onClickDeleteComment={onClickDeleteComment}
            onClickOpenDeleteModal={onClickOpenDeleteModal}
            onClickOpenEditModal={onClickOpenEditModal}
            onClickUpdateComment={onClickUpdateComment}

            onInputCommentDeletePassword={onInputCommentDeletePassword}
            onInputCommentEditPassword={onInputCommentEditPassword}
            onInputCommentEditContent={onInputCommentEditContent}
            onToggleModal={onToggleModal}
            />
        </div>
    )
}
