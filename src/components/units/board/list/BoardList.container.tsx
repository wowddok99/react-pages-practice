import { useRouter } from "next/router"
import BoardListUI from "./BoardList.presenter"
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries"
import { useQuery } from "@apollo/client"
import { FetchBoard, FetchBoardsData } from "./BoardList.type";
import { ChangeEvent, useEffect, useState } from "react";
import { FetchBoardsCountData } from "../../commons/pagination/Pagination.types";

export default function BoardList(){
    const router = useRouter();
    
    // 1. State Variables
    const [searchTitle, setSearchTitle] = useState("");
    const [startDate, setStartDate] = useState<undefined | string>(undefined);
    const [endDate, setEndDate] = useState<undefined | string>(undefined);

    // 2. GraphQL Queries and Mutations
    const {data: fetchBoardsData, refetch} = useQuery<FetchBoardsData>(FETCH_BOARDS, {
        variables: {
            page: Number(router.query.pageNumber ?? 1),
            search: router.query.search,
            // router의 query에서 가져온 startDate와 endDate가 빈 문자열이거나 undefined 이면
            // 변수(startDate 및 endData)에 undefined를 저장
            startDate: router.query.startDate === "" || router.query.startDate === undefined ? undefined : (router.query.startDate +"T00:00:00Z"),
            endDate: router.query.endDate === "" || router.query.endDate === undefined ? undefined : (router.query.endDate + "T23:59:59Z")
        },
        onCompleted: () => {
            setSearchTitle(router.query.search as string);
            setStartDate(router.query.startDate as string);
            setEndDate(router.query.endDate as string);
        }
    });

    const { data: fetchBoardsCountData } = useQuery<FetchBoardsCountData>(FETCH_BOARDS_COUNT, {
            variables: {
                page: Number(router.query.page),
                search: router.query.search,
                startDate: router.query.startDate === "" || router.query.startDate === undefined ? undefined : (router.query.startDate +"T00:00:00Z"),
                endDate: router.query.endDate === "" || router.query.endDate === undefined ? undefined : (router.query.endDate + "T23:59:59Z")
            }
        }
    );

    // 3. Event Handlers (Click Handlers)
    const onClickSearchByTitleAndDate = (): void => {
        router.push({
            pathname: `/boards/list/1`,
            query: {
                startPage: 1,
                currentPage: 1,
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

    // 4. Event Handlers (Input Handlers)
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
            refetch={refetch}

            fetchBoardsData={fetchBoardsData}
            searchTitle={searchTitle}
            startDate={startDate}
            endDate={endDate}
            fetchBoardsCountData={fetchBoardsCountData}

            onClickMoveToDetailPage={onClickMoveToDetailPage}
            onClickMoveToWritePage={onClickMoveToWritePage}
            onClickSearchByTitleAndDate={onClickSearchByTitleAndDate}
            
            onInputSearchTitle={onInputSearchTitle}
            onInputStartDate={onInputStartDate}
            onInputEndDate={onInputEndDate}
            />
        </div>
    )
}
