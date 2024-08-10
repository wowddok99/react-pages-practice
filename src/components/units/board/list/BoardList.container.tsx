import { useRouter } from "next/router"
import BoardListUI from "./BoardList.presenter"
import { FETCH_BOARDS, FETCH_BOARDS_1 } from "./BoardList.queries"
import { useQuery } from "@apollo/client"
import { fetchBoard } from "./BoardList.type";

export default function BoardList(){
    const router = useRouter();

    // FETCH_BOARDS_1 -> 1페이지만 조회
    // const {data} = useQuery(FETCH_BOARDS_1);

    let pageNumber = router.query.pageNumber;

    // pageNumber가 비어있는 경우 1페이지로 고정
    if (pageNumber === undefined) {
        pageNumber = "1";
    }

    const {data: boardsData} = useQuery(FETCH_BOARDS, {
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
    
    return (
        <div>
            <BoardListUI
            boardsData={boardsData}
            pageNumber={pageNumber}
            onClickMoveToDetailPage={onClickMoveToDetailPage}
            onClickMoveToWritePage={onClickMoveToWritePage}
            />
        </div>
    )
}
