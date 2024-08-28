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
    _id: string;
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

export interface UpdateBoardCommentInput {
    contents: string;
    rating: number;
}

// types - BoardDetail.presenter
export interface BoardDetailUIProps {
    fetchBoardData?: FetchBoardData;
    fetchBoardCommentsData?: FetchBoardCommentsData;

    commentWriter: string;
    commentPassword: string;
    commentContent: string
    commentContentLength: number;
    starRating: number;
    editStarRating: number;
    likeCount: number;
    dislikeCount: number;
    isModalOpen: boolean;
    modalMode: string;

    onClickMoveToListPage: (event: MouseEvent<HTMLButtonElement>) => void;
    onClickMoveToEditPage: (event: MouseEvent<HTMLButtonElement>) => void;
    onClickDeleteBoard: (event: MouseEvent<HTMLButtonElement>) => void;
    onClickSubmitComment: (event: MouseEvent<HTMLButtonElement>) => void;
    onClickLike: (event: MouseEvent<HTMLImageElement>) => void;
    onClickDislike: (event: MouseEvent<HTMLImageElement>) => void;
    onClickStarRatingIncrease: (event: MouseEvent<SVGElement>) => void;
    onClickStarRatingDecrease: (event: MouseEvent<SVGElement>) => void;
    onClickEditStarRatingIncrease: (event: MouseEvent<SVGElement>) => void;
    onClickEditStarRatingDecrease: (event: MouseEvent<SVGElement>) => void;
    onClickDeleteComment: (event: MouseEvent<HTMLButtonElement>) => void;
    onClickOpenDeleteModal: (_id: string) => void;
    onClickOpenEditModal: (_id: string, rating: number) => void;
    onClickUpdateComment: (event: MouseEvent<HTMLButtonElement>) => void;


    onInputCommentWriter: (event: ChangeEvent<HTMLInputElement>) => void;
    onInputCommentPassword: (event: ChangeEvent<HTMLInputElement>) => void;
    onInputCommentContent: (event: ChangeEvent<HTMLInputElement>) => void;
    onInputCommentDeletePassword: (event: ChangeEvent<HTMLInputElement>) => void;
    onInputCommentUpdatePassword: (event: ChangeEvent<HTMLInputElement>) => void; 
    onInputCommentContentUpdate: (event: ChangeEvent<HTMLInputElement>) => void; 

    onToggleModal: () => void;
}
