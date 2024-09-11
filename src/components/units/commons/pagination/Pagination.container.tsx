import { MouseEvent, useState } from "react";
import PaginationUI from "./Pagination.presenter";
import { PaginationProps } from "./Pagination.types";

export default function Pagination(props: PaginationProps){
    const [startPage, setStartPage] = useState(1);

    const lastPage = Math.ceil((props.fetchBoardsCountData?.fetchBoardsCount ?? 10) / 10);

    const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
        void props.refetch({ page: Number(event.currentTarget.id) });
    }

    const onClickMoveToPreviousPage = (): void => {
        if (startPage === 1) {
            return;
        }
        
        setStartPage(startPage - 10)
        void props.refetch({ page: startPage - 10 })
    }

    const onClickMoveToNextPage = (): void => {
        if (startPage + 10 <= lastPage) {
            setStartPage(startPage + 10)
            void props.refetch({ page: startPage + 10 })
        }
    }

    return (
        <PaginationUI
            startPage={startPage}
            lastPage={lastPage}
            onClickPage={onClickPage}
            onClickMoveToPreviousPage={onClickMoveToPreviousPage}
            onClickMoveToNextPage={onClickMoveToNextPage}
        />
    )
}