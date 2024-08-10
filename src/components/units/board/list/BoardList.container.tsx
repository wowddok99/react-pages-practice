import { useRouter } from "next/router"
import BoardListUI from "./BoardList.presenter"
import { FETCH_BOARDS, FETCH_BOARDS_1 } from "./BoardList.queries"
import { useQuery } from "@apollo/client"
import { fetchBoard } from "./BoardList.type";
import { MouseEvent } from "react";

export default function BoardList(){
    const router = useRouter();

    // FETCH_BOARDS_1 -> 1페이지만 조회
    // const {data} = useQuery(FETCH_BOARDS_1);

    let pageNumber = router.query.pageNumber;

    // pageNumber가 비어있는 경우 1페이지로 고정
    if (pageNumber === undefined) {
        pageNumber = "1";
    }

    const {data: fetchBoardsData} = useQuery(FETCH_BOARDS, {
        variables: {
            page: Number(pageNumber)
        }
    });

    const onClickMoveToDetailPage = (el: fetchBoard) => {
        router.push(`/boards/detail/${el._id}`);    
    }

    const onClickMoveToWritePage = () => {
        router.push(`/boards/write`);    
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
            />
        </div>
    )
}
