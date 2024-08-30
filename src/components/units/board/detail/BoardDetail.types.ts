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

// types - BoardDetail.presenter
export interface BoardDetailUIProps {
    fetchBoardData?: FetchBoardData;

    likeCount: number;
    dislikeCount: number;

    onClickMoveToListPage: (event: MouseEvent<HTMLButtonElement>) => void;
    onClickMoveToEditPage: (event: MouseEvent<HTMLButtonElement>) => void;
    onClickDeleteBoard: (event: MouseEvent<HTMLButtonElement>) => void;
    onClickLike: (event: MouseEvent<HTMLImageElement>) => void;
    onClickDislike: (event: MouseEvent<HTMLImageElement>) => void;
}
