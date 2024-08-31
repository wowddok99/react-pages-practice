import BoardWriter from "../../../../src/components/units/board/write/BoardWrite.container"
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import { FetchBoardData } from "../../../../src/components/units/board/write/BoardWrite.type";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
        _id
        writer
        title
        contents
        youtubeUrl
        boardAddress {
                _id
                zipcode
                address
                addressDetail
            }
    }
  }
`

export default function BoardsEditPage() {
    const router = useRouter();

    const { data: fetchBoardData } = useQuery<FetchBoardData>(FETCH_BOARD, {
        variables: {
            boardId: router.query.boardId
        }
    });

    return (
        <div>
            <BoardWriter 
            isEdit={true} 
            fetchBoardData={fetchBoardData}
            />
        </div>
    )
}