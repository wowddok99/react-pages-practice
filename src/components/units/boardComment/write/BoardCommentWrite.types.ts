import { ChangeEvent, MouseEvent } from "react";

// types - BoardCommentWriter.container
export interface CreateBoardCommentInput {
    writer: string;
    password: string
    contents: string;
    rating: number;
}

// types - BoardCommentWriter.presenter
export interface BoardCommentWriteUIProps {
    commentContentLength: number;
    commentWriter: string;
    commentPassword: string;
    commentContent: string
    starRating: number;

    onClickStarRatingIncrease: (event: MouseEvent<SVGElement>) => void;
    onClickStarRatingDecrease: (event: MouseEvent<SVGElement>) => void;
    onClickSubmitComment: (event: MouseEvent<HTMLButtonElement>) => void;

    onInputCommentWriter: (event: ChangeEvent<HTMLInputElement>) => void;
    onInputCommentPassword: (event: ChangeEvent<HTMLInputElement>) => void;
    onInputCommentContent: (event: ChangeEvent<HTMLInputElement>) => void;
}