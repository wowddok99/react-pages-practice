import { MouseEvent, useEffect, useState } from "react";
import PaginationUI from "./Pagination.presenter";
import { PaginationProps } from "./Pagination.types";
import { useRouter } from "next/router";

export default function Pagination(props: PaginationProps){
    const router = useRouter();
    
    // 0. useEffect
    useEffect(() => { // router.query의 startPage 및 currentPage의 값이 변하면 상태 업데이트
        setStartPage(Number(router.query.startPage) || 1); // router.query.startPage가 Nan(빈값)이면 1로 저장
        setCurrentPage(Number(router.query.currentPage) || 1);
    }, [router.query.startPage, router.query.currentPage]);

    // 1. Paging Management
    const [startPage, setStartPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const lastPage = Math.ceil((props.fetchBoardsCountData?.fetchBoardsCount ?? 10) / 10);
    
    // 2. Event Handlers (Click Handlers)
    const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
        // 2024.10.04 - refetch 사용 안함 -> router.push로 변경 (페이지 전환 방식 변경)
        // void props.refetch({ page: Number(event.currentTarget.id) });
        
        router.push({
            pathname: `/boards/list/${(event.currentTarget.id)}`,
            query: {
                search: router.query.search,
                startDate: router.query.startDate === "" || router.query.startDate === undefined ? undefined : (router.query.startDate),
                endDate: router.query.endDate === "" || router.query.endDate === undefined ? undefined : (router.query.endDate),
                startPage: startPage,
                currentPage: Number(event.currentTarget.id)
            }
        });
        
        setCurrentPage(Number(event.currentTarget.id));
    }

    const onClickMoveToPreviousPage = (): void => {
        if (startPage === 1) {
            return;
        }
        
        setStartPage(startPage - 10)
        setCurrentPage(Number(startPage - 10));

        // 2024.10.04 - refetch 사용 안함 -> router.push로 변경 (페이지 전환 방식 변경)
        // void props.refetch({ page: startPage - 10 })
        router.push({
            pathname: `/boards/list/${(startPage - 10)}`,
            query: {
                search: router.query.search,
                startDate: router.query.startDate === "" || router.query.startDate === undefined ? undefined : (router.query.startDate),
                endDate: router.query.endDate === "" || router.query.endDate === undefined ? undefined : (router.query.endDate),
                startPage: startPage-10,
                currentPage: Number(startPage - 10)
            }
        });
    }

    const onClickMoveToNextPage = (): void => {
        if (startPage + 10 <= lastPage) {
            setStartPage(startPage + 10)
            setCurrentPage(Number(startPage + 10));

            // 2024.10.04 - refetch 사용 안함 -> router.push로 변경 (페이지 전환 방식 변경)
            // void props.refetch({ page: startPage + 10 })
            router.push({
                pathname: `/boards/list/${(startPage + 10)}`,
                query: {
                    search: router.query.search,
                    startDate: router.query.startDate === "" || router.query.startDate === undefined ? undefined : (router.query.startDate),
                    endDate: router.query.endDate === "" || router.query.endDate === undefined ? undefined : (router.query.endDate),
                    startPage: startPage+10,
                    currentPage: Number(startPage + 10)
                }
            });
        }
    }

    return (
        <PaginationUI
            startPage={startPage}
            lastPage={lastPage}
            currentPage={currentPage}
            onClickPage={onClickPage}
            onClickMoveToPreviousPage={onClickMoveToPreviousPage}
            onClickMoveToNextPage={onClickMoveToNextPage}
        />
    )
}