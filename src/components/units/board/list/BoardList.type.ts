import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import exp from "constants";
import { ChangeEvent, MouseEvent } from "react";
import { FetchBoardsCountData } from "../../commons/pagination/Pagination.types";

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
    searchTitle: string;
    endDate: string | undefined;
    startDate: string | undefined;
    pageNumber: string | string[];
    fetchBoardsCountData?: FetchBoardsCountData;
    refetch: (variables?: Partial<OperationVariables> | undefined) => Promise<ApolloQueryResult<FetchBoardsData>>;
    
    onClickMoveToDetailPage: (el: FetchBoard) => void;
    onClickMoveToWritePage: (event: MouseEvent<HTMLButtonElement>) => void;
    onClickSearchByTitleAndDate: (event: MouseEvent<HTMLButtonElement>) => void;

    onInputSearchTitle: (event: ChangeEvent<HTMLInputElement>) => void;
    onInputStartDate:(event: ChangeEvent<HTMLInputElement>) => void;
    onInputEndDate: (event: ChangeEvent<HTMLInputElement>) => void;
}
