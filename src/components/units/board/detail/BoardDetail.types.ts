import { MouseEvent, ChangeEvent } from 'react';

// types - BoardDetail.container
export interface FetchBoard {
    writer: string;
    title: string
    contents: string;
    createdAt: string
    likeCount: number;
    dislikeCount: number;
}

export interface FetchBoardData {
    fetchBoard: FetchBoard
}

export interface FetchBoardComment{
    _id: number;
    writer: string;
    contents: string;
    rating: number;
    createdAt: string;
}

export interface FetchBoardCommentsData {
    fetchBoardComments: Array<FetchBoardComment>;
}

export interface CreateBoardCommentInput {
    writer: string;
    password: string
    contents: string;
    rating: number;
}

// types - BoardDetail.presenter
export interface BoardDetailUIProps {
    fetchBoardData?: FetchBoardData;
    fetchBoardCommentsData?: FetchBoardCommentsData

    commentContentLength: number;
    starRating: number;
    likeCount: number;
    dislikeCount: number;

    onClickMoveToListPage: (event: MouseEvent<HTMLButtonElement>) => void;
    onClickMoveToEditPage: (event: MouseEvent<HTMLButtonElement>) => void;
    onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
    onClickSubmitComment: (event: MouseEvent<HTMLButtonElement>) => void;
    onClickLike: (event: MouseEvent<HTMLImageElement>) => void;
    onClickDislike: (event: MouseEvent<HTMLImageElement>) => void;
    onClickStarRatingIncrease: (event: MouseEvent<SVGElement>) => void;
    onClickStarRatingDecrease: (event: MouseEvent<SVGElement>) => void;
    onInputCommentWriter: (event: ChangeEvent<HTMLInputElement>) => void;
    onInputCommentPassword: (event: ChangeEvent<HTMLInputElement>) => void;
    onInputCommentContent: (event: ChangeEvent<HTMLInputElement>) => void;
    setStarRating: React.Dispatch<React.SetStateAction<number>>;
}
