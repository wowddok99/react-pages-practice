import BoardDetailUI from "./BoardDetail.presenter"
import { useRouter } from "next/router"
import { useQuery, useMutation } from "@apollo/client"
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";

export default function BoardDetail(){
    const router = useRouter();

    const [deleteBoard] = useMutation(DELETE_BOARD);

    const {data} = useQuery(FETCH_BOARD, {
        variables: {
            boardId: router.query.boardId
        }
    })

    const onClickMoveToListPage = () => {
        router.push(`/boards/list/1`);    
    }

    const onClickMoveToEditPage = () => {
        console.log("test")
        router.push(`/boards/edit/${router.query.boardId}`);    
    }

    const onClickDelete = async() => {
        try {
            await deleteBoard({
                variables: {
                    boardId: router.query.boardId
                }
            });
            alert("게시물이 삭제되었습니다.");
            router.push("/boards/list/1");
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div>
            <BoardDetailUI
            data={data}
            onClickMoveToListPage={onClickMoveToListPage}
            onClickMoveToEditPage={onClickMoveToEditPage}
            onClickDelete={onClickDelete}
            />
        </div>
    )
}