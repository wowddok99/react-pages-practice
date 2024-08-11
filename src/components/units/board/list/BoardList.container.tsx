import { useRouter } from "next/router"
import BoardListUI from "./BoardList.presenter"
import { FETCH_BOARDS } from "./BoardList.queries"
import { useQuery } from "@apollo/client"
import { fetchBoard } from "./BoardList.type";
import { ChangeEvent, useState } from "react";
import { start } from "repl";

export default function BoardList(){
    const router = useRouter();
    const [searchTitle, setSearchTitle] = useState("");
    const [startDate, setStartDate] = useState<undefined | string>(undefined);
    const [endDate, setEndDate] = useState<undefined | string>(undefined);
    

    let pageNumber = router.query.pageNumber;

    // pageNumber가 비어있는 경우 1페이지로 고정
    if (pageNumber === undefined) {
        pageNumber = "1";
    }

    const {data: fetchBoardsData} = useQuery(FETCH_BOARDS, {
        variables: {
            page: Number(pageNumber),
            search: router.query.search as string,
            // router의 query에서 가져온 startDate와 endDate가 빈 문자열일 경우 undefined로 처리
            startDate: router.query.startDate === "" ? undefined : router.query.startDate,
            endDate: router.query.endDate === "" ? undefined : router.query.endDate
        }
    });

    const onInputSearchTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTitle(event.target.value);
    }

    const onInputStartDate = (event: ChangeEvent<HTMLInputElement>) => {
        setStartDate(event.target.value);
    }

    const onInputEndDate = (event: ChangeEvent<HTMLInputElement>) => {
        setEndDate(event.target.value);
    }

    const onClickMoveToDetailPage = (el: fetchBoard) => {
        router.push(`/boards/detail/${el._id}`);
    }

    const onClickMoveToWritePage = () => {
        router.push(`/boards/write`);    
    }
    
    const onClickSearchTitle = () => {
        router.push({
            pathname: `/boards/list/1`,
            query: { 
                search: searchTitle,
                startDate: startDate,
                endDate: endDate
            }
        });
    }


    const onClickMoveToPreviousPage = () => {
        if (pageNumber === "1" || pageNumber === "0") {
            return;
        }
        router.push(`/boards/list/${Number(pageNumber)-1}`);
    }

    const onClickMoveToNextPage = () => {
        router.push(`/boards/list/${Number(pageNumber)+1}`);
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
            onClickSearchTitle={onClickSearchTitle}
            onInputSearchTitle={onInputSearchTitle}
            onInputStartDate={onInputStartDate}
            onInputEndDate={onInputEndDate}
            />
        </div>
    )
}
