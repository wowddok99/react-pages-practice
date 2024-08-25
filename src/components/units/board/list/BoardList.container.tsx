import { useRouter } from "next/router"
import BoardListUI from "./BoardList.presenter"
import { FETCH_BOARDS } from "./BoardList.queries"
import { useQuery } from "@apollo/client"
import { FetchBoard, FetchBoardsData } from "./BoardList.type";
import { ChangeEvent, useState } from "react";

export default function BoardList(){
    const router = useRouter();
    
    // 1. State Variables
    const [searchTitle, setSearchTitle] = useState("");
    const [startDate, setStartDate] = useState<undefined | string>(undefined);
    const [endDate, setEndDate] = useState<undefined | string>(undefined);
    

    // 2. Page Number Management
    let pageNumber = router.query.pageNumber; 

    if (pageNumber === undefined) { // pageNumber가 비어있는 경우 1페이지로 고정
        pageNumber = "1";
    }

    // 3. GraphQL Queries and Mutations
    const {data: fetchBoardsData} = useQuery<FetchBoardsData>(FETCH_BOARDS, {
        variables: {
            page: Number(pageNumber),
            search: router.query.search as string,
            // router의 query에서 가져온 startDate와 endDate가 빈 문자열이거나 undefined 이면
            // 변수(startDate 및 endData)에 undefined를 저장
            startDate: router.query.startDate === "" || router.query.startDate === undefined ? undefined : (router.query.startDate +"T00:00:00Z"),
            endDate: router.query.endDate === "" || router.query.endDate === undefined ? undefined : (router.query.endDate + "T23:59:59Z")
        }
    });

    // 4. Event Handlers (Click Handlers)
    const onClickSearchByTitleAndDate = (): void => {
        router.push({
            pathname: `/boards/list/1`,
            query: { 
                search: searchTitle,
                startDate: startDate,
                endDate: endDate
            }
        });
    }


    const onClickMoveToPreviousPage = (): void => {
        if (pageNumber === "1" || pageNumber === "0") {
            return;
        }
        router.push({
            pathname: `/boards/list/${Number(pageNumber)-1}`,
            query: {
                search: searchTitle,
                startDate: startDate,
                endDate: endDate
            }
        });
    }

    const onClickMoveToNextPage = (): void => {
        router.push({
            pathname: `/boards/list/${Number(pageNumber)+1}`,
            query: {
                search: searchTitle,
                startDate: startDate,
                endDate: endDate
            }
        });
    }
    
    const onClickMoveToDetailPage = (el: FetchBoard): void => {
        router.push(`/boards/detail/${el._id}`);
    }

    const onClickMoveToWritePage = (): void => {
        router.push(`/boards/write`);    
    }

    // 5. Event Handlers (Input Handlers)
    const onInputSearchTitle = (event: ChangeEvent<HTMLInputElement>): void => {
        setSearchTitle(event.target.value);
    }

    const onInputStartDate = (event: ChangeEvent<HTMLInputElement>): void => {
        setStartDate(event.target.value);
    }

    const onInputEndDate = (event: ChangeEvent<HTMLInputElement>): void => {
        setEndDate(event.target.value);
    }

    return (
        <div>
            <BoardListUI
            fetchBoardsData={fetchBoardsData}
            pageNumber={pageNumber}
            onClickMoveToDetailPage={onClickMoveToDetailPage}
            onClickMoveToWritePage={onClickMoveToWritePage}
            onClickMoveToPreviousPage={onClickMoveToPreviousPage}
            onClickMoveToNextPage={onClickMoveToNextPage}
            onClickSearchByTitleAndDate={onClickSearchByTitleAndDate}
            onInputSearchTitle={onInputSearchTitle}
            onInputStartDate={onInputStartDate}
            onInputEndDate={onInputEndDate}
            />
        </div>
    )
}
