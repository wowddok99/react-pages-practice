import { ChangeEvent, MouseEvent } from "react";

export interface fetchBoard{
    _id: string;
    title: string;
    writer: string;
    createdAt: string;
}

export interface BoardListUIProps {
    fetchBoardsData?: {
        fetchBoards: Array<fetchBoard>
    }
    pageNumber: string | string[]
    onClickMoveToDetailPage: (
        el: fetchBoard
    ) => void;
    onClickMoveToWritePage: (event: MouseEvent<HTMLButtonElement>) => void;
    onClickMoveToPreviousPage: (event: MouseEvent<SVGElement>) => void;
    onClickMoveToNextPage: (event: MouseEvent<SVGElement>) => void;
    onInputSearchTitle: (event: ChangeEvent<HTMLInputElement>) => void;
    onClickSearchByTitleAndDate: (event: MouseEvent<HTMLButtonElement>) => void;
    onInputStartDate:(event: ChangeEvent<HTMLInputElement>) => void;
    onInputEndDate: (event: ChangeEvent<HTMLInputElement>) => void;
}