import { MouseEvent, ChangeEvent } from 'react';

export interface CreateBoardCommentInput {
    contents: string
    rating: number
}

export interface FetchBoardComment{
    _id: number;
    contents: string;
    rating: number;
    createdAt: string;
}

export interface BoardDetailUIProps {
    fetchBoardData: {
        fetchBoard: {
            writer: string;
            title: string
            contents: string;
            createdAt: string
            // likeCount: number;
            // dislikeCount: number;
        }
    };

    fetchBoardCommentsData: {
        fetchBoardComments: Array<FetchBoardComment>
    };

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
