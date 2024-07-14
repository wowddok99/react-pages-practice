import BoardDetailUI from "./BoardDetail.presenter"
import { useRouter } from "next/router"
import { useQuery } from "@apollo/client"
import { FETCH_BOARD } from "./BoardDetail.queries";

export default function BoardDetail(){
    const router = useRouter();

    const {data} = useQuery(FETCH_BOARD, {
        variables: {
            boardId: router.query.boardId
        }
    })

    return (
        <div>
            <BoardDetailUI
            data={data}
            />
        </div>
    )
}