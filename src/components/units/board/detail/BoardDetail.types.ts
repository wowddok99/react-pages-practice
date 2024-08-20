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
    contents: string;
    rating: number;
    createdAt: string;
}

export interface FetchBoardCommentsData {
    fetchBoardComments: Array<FetchBoardComment>;
}

export interface CreateBoardCommentInput {
    contents: string
    rating: number
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
    onInputCommentContent: (event: ChangeEvent<HTMLInputElement>) => void;
    setStarRating: React.Dispatch<React.SetStateAction<number>>;
}
