import BoardWriter from "../../../../src/components/units/board/write/BoardWrite.container"
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`

export default function BoardsEditPage() {
    const router = useRouter();

    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            boardId: router.query.boardId
        }
    });

    return (
        <div>
            <BoardWriter isEdit={true} data={data}></BoardWriter>
        </div>
    )
}