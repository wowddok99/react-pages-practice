import { MouseEvent } from "react";

export interface fetchBoard{
    _id: string;
    title: string;
    writer: string;
    createdAt: string;
}

export interface BoardListUIProps {
    boardsData?: {
        fetchBoards: Array<fetchBoard>
    }
    pageNumber: string | string[]
    onClickMoveToDetailPage: (
        el: fetchBoard
    ) => void;
    onClickMoveToWritePage: (event: MouseEvent<HTMLButtonElement>) => void;
}