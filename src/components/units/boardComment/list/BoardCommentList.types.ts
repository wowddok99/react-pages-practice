import { ChangeEvent, MouseEvent } from "react";

// types - BoardCommentList.container
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

export interface UpdateBoardCommentInput {
    contents: string;
    rating: number;
}

// types - BoardCommentList.presenter
export interface BoardCommentListUIProps {
    fetchBoardCommentsData?: FetchBoardCommentsData;

    isModalOpen: boolean;
    modalMode: string;
    editStarRating: number;

    onToggleModal: () => void;

    onClickOpenEditModal: (_id: string, rating: number) => void;
    onClickOpenDeleteModal: (_id: string) => void;
    onClickEditStarRatingIncrease: (event: MouseEvent<SVGElement>) => void;
    onClickEditStarRatingDecrease: (event: MouseEvent<SVGElement>) => void;
    onClickUpdateComment: (event: MouseEvent<HTMLButtonElement>) => void;
    onClickDeleteComment: (event: MouseEvent<HTMLButtonElement>) => void;

    onInputCommentDeletePassword: (event: ChangeEvent<HTMLInputElement>) => void;
    onInputCommentEditContent: (event: ChangeEvent<HTMLInputElement>) => void; 
    onInputCommentEditPassword: (event: ChangeEvent<HTMLInputElement>) => void; 
}