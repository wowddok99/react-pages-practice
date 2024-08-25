import exp from "constants";
import { ChangeEvent, MouseEvent } from "react";

// types - BoardList.container
export interface FetchBoard{
    _id: string;
    title: string;
    writer: string;
    createdAt: string;
}

export interface FetchBoardsData{
    fetchBoards: Array<FetchBoard>;
}

// types - BoardList.presenter
export interface BoardListUIProps {
    fetchBoardsData?: FetchBoardsData;
    pageNumber: string | string[];

    onClickMoveToDetailPage: (el: FetchBoard) => void;
    onClickMoveToWritePage: (event: MouseEvent<HTMLButtonElement>) => void;
    onClickMoveToPreviousPage: (event: MouseEvent<SVGElement>) => void;
    onClickMoveToNextPage: (event: MouseEvent<SVGElement>) => void;
    onClickSearchByTitleAndDate: (event: MouseEvent<HTMLButtonElement>) => void;

    onInputSearchTitle: (event: ChangeEvent<HTMLInputElement>) => void;
    onInputStartDate:(event: ChangeEvent<HTMLInputElement>) => void;
    onInputEndDate: (event: ChangeEvent<HTMLInputElement>) => void;
}