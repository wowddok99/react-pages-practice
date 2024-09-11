import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { MouseEvent } from "react";
import { FetchBoardsData } from "../../board/list/BoardList.type";

export interface FetchBoardsCountData{
    fetchBoardsCount: number;
}

export interface PaginationProps {
    fetchBoardsCountData?: FetchBoardsCountData;
    refetch: (variables?: Partial<OperationVariables> | undefined) => Promise<ApolloQueryResult<FetchBoardsData>>
}

export interface PaginationUIProps{
    startPage: number;
    lastPage: number;
    
    onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
    onClickMoveToPreviousPage: () => void;
    onClickMoveToNextPage: () => void;
}