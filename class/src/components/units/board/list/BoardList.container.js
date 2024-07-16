import { useRouter } from "next/router"
import BoardListUI from "./BoardList.presenter"
import { FETCH_BOARDS, FETCH_BOARDS_1 } from "./BoardList.queries"
import { useQuery } from "@apollo/client"

export default function BoardList(){
    const router = useRouter();
    // FETCH_BOARDS_1 -> 1페이지만 조회
    // const {data} = useQuery(FETCH_BOARDS_1);

    const {data} = useQuery(FETCH_BOARDS, {
        variables: {
            page: Number(router.query.pageNumber)
        }
    });

    let pageNumber = router.query.pageNumber;

    if (pageNumber === null) {
        pageNumber = 1;
    }

    // console.log(data?.fetchBoards[0]);
    return (
        <div>
            <BoardListUI
            data={data}
            pageNumber={pageNumber}
            />
        </div>
    )
}
