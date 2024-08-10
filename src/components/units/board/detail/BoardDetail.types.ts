import { MouseEvent, ChangeEvent } from 'react';

export interface createBoardCommentInput {
    contents?: string
    rating: number
}

export interface fetchBoardComment{
    _id: number;
    contents: string;
    rating: number;
    createdAt: string;
}

export interface BoardDetailUIProps {
    boardData?: {
        fetchBoard: {
            writer: string;
            title: string
            contents: string;
            createdAt: string

        }
    };

    boardCommentsData?: {
        fetchBoardComments: Array<fetchBoardComment>
    };

    // boardCommentData?: {
    //     fetchBoardComments: Array<{
    //         _id: number;
    //         contents: string;
    //         rating: number;
    //         createdAt: string;
    //     }>
    // };
    
    commentContentLength?: number;
    starRating?: number;
    onClickMoveToListPage: (event: MouseEvent<HTMLButtonElement>) => void;
    onClickMoveToEditPage: (event: MouseEvent<HTMLButtonElement>) => void;
    onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
    onClickSubmitComment: (event: MouseEvent<HTMLButtonElement>) => void;
    onInputCommentContent: (event: ChangeEvent<HTMLInputElement>) => void;
    setStarRating: React.Dispatch<React.SetStateAction<number>>;
}
