import { MouseEvent, ChangeEvent } from 'react';

// types - BoardDetail.container
export interface FetchBoard {
    writer: string;
    title: string
    contents: string;
    createdAt: string
    likeCount: number;
    dislikeCount: number;
    youtubeUrl: string;
    boardAddress: {
        _id: string;
        zipcode: string;
        address: string;
        addressDetail: string;
    }
}

export interface FetchBoardData {
    fetchBoard: FetchBoard
}

// types - BoardDetail.presenter
export interface BoardDetailUIProps {
    fetchBoardData?: FetchBoardData;

    likeCount: number;
    dislikeCount: number;
    isYoutubePlayerError: boolean;
    fullAddress: string;
    
    onClickMoveToListPage: (event: MouseEvent<HTMLButtonElement>) => void;
    onClickMoveToEditPage: (event: MouseEvent<HTMLButtonElement>) => void;
    onClickDeleteBoard: (event: MouseEvent<HTMLButtonElement>) => void;
    onClickLike: (event: MouseEvent<HTMLImageElement>) => void;
    onClickDislike: (event: MouseEvent<HTMLImageElement>) => void;

    onErrorYoutubePlayer: () => void;
}
