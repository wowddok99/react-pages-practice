import { useRouter } from "next/router"
import BoardListUI from "./BoardList.presenter"
import { FETCH_BOARDS, FETCH_BOARDS_1 } from "./BoardList.queries"
import { useQuery } from "@apollo/client"

export default function BoardList(){
    const router = useRouter();

    // FETCH_BOARDS_1 -> 1페이지만 조회
    // const {data} = useQuery(FETCH_BOARDS_1);

    let pageNumber = router.query.pageNumber;

    if (pageNumber === undefined) {
        pageNumber = 1;
    }

    const {data} = useQuery(FETCH_BOARDS, {
        variables: {
            page: Number(pageNumber)
        }
    });

    const onClickRow = (el) => (event) => {
        router.push(`/boards/detail/${el._id}`);    
    }

    const onClickSubmit = () => {
        console.log("test");
        router.push(`/boards/write`);    
    }
    
    return (
        <div>
            <BoardListUI
            data={data}
            pageNumber={pageNumber}
            onClickRow={onClickRow}
            onClickSubmit={onClickSubmit}
            />
        </div>
    )
}
