import { useRouter } from "next/router";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import { ApolloError, useMutation } from "@apollo/client";
import { CREATE_BOARD_COMMENT } from "./BoardCommentWrite.queries";
import { ChangeEvent, MouseEvent, useState } from "react";
import { CreateBoardCommentInput } from "./BoardCommentWrite.types";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";


export default function BoardCommentWrite() {
    const router = useRouter();

    // 1. State Variables
    const [starRating , setStarRating] = useState<number>(0);
    const [commentWriter, setCommentWriter] = useState<string>("");
    const [commentPassword, setCommentPassword] = useState<string>("");
    const [commentContent, setCommentContent] = useState<string>("");
    const [commentContentLength, setCommentContentLength] = useState<number>(0);

    // 2. GraphQL Queries and Mutations
    const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);


    // 3. Event Handlers (Click Handlers)
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

    const onClickStarRatingIncrease = (event: MouseEvent<SVGElement>): void => {
        setStarRating((starRating ?? 0)+1)
    }

    const onClickStarRatingDecrease = (event: MouseEvent<SVGElement>): void  => {
        setStarRating((starRating ?? 0)-1)
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

    // 5. Helper Functions
    const resetCommentInput = (): void => {
        setCommentWriter("");
        setCommentPassword("");
        setCommentContent("");
        setCommentContentLength(0);
        setStarRating(0);
    }

    return (
        <div>
            <BoardCommentWriteUI
            commentContentLength={commentContentLength}
            commentWriter={commentWriter}
            commentPassword={commentPassword}
            commentContent={commentContent}
            starRating={starRating}

            onClickSubmitComment={onClickSubmitComment}
            onClickStarRatingIncrease={onClickStarRatingIncrease}
            onClickStarRatingDecrease={onClickStarRatingDecrease}
            
            onInputCommentWriter={onInputCommentWriter}
            onInputCommentPassword={onInputCommentPassword}
            onInputCommentContent={onInputCommentContent}
            />
        </div>
    )
}