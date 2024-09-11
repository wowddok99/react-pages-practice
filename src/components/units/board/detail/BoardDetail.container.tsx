import BoardDetailUI from "./BoardDetail.presenter"
import { useRouter } from "next/router"
import { useQuery, useMutation, ApolloError } from "@apollo/client"
import { FETCH_BOARD, DELETE_BOARD, LIKE_BOARD, DISLIKE_BOARD } from "./BoardDetail.queries";
import { useState } from "react";
import { FetchBoardData } from "./BoardDetail.types";

export default function BoardDetail(){
    const router = useRouter();
    
    // 1. State Variables
    const [likeCount, setLikeCount] = useState<number>(0);
    const [dislikeCount, setDislikeCount] = useState<number>(0);
    const [boardCommentId, setBoardCommentId] = useState<string>("");
    const [isYoutubePlayerError, setIsYoutubePlayerError] = useState<boolean>(false);
    const [fullAddress, setFullAddress] = useState<string>("");

    // 2. GraphQL Queries and Mutations
    const [deleteBoard] = useMutation(DELETE_BOARD);
    const [likeBoard] = useMutation(LIKE_BOARD);
    const [dislikeBoard] = useMutation(DISLIKE_BOARD);

    const {data: fetchBoardData} = useQuery<FetchBoardData>(FETCH_BOARD, {
        variables: {
            boardId: router.query.boardId
        },
        onCompleted: (fetchBoardData) => {
            setLikeCount(fetchBoardData.fetchBoard.likeCount);
            setDislikeCount(fetchBoardData.fetchBoard.dislikeCount);
            const fullAddress = "(" + fetchBoardData.fetchBoard.boardAddress.zipcode + ") " + fetchBoardData.fetchBoard.boardAddress.address + " " + fetchBoardData.fetchBoard.boardAddress.addressDetail;
            setFullAddress(fullAddress);
        }
    });


    // 3. Event Handlers (Click Handlers)
    const onClickDeleteBoard = async(): Promise<void> => {
        try {
            await deleteBoard({
                variables: {
                    boardId: router.query.boardId
                }
            });
            alert("게시물이 삭제되었습니다.");
            router.push("/boards/list/1");
        } catch (error) {
            if (error instanceof ApolloError) {
                alert(error.message);
            }
        }
    }

    const onClickLike = async(): Promise<void> => {
        try {
            const result = await likeBoard({
                variables: {
                    boardId: router.query.boardId
                }
            })
            setLikeCount(result.data.likeBoard);
        } catch(error){
            if (error instanceof ApolloError) {
                console.log(error.message);
            } 
        }
    }

    const onClickDislike = async(): Promise<void> => {
        try {
            const result = await dislikeBoard({
                variables: {
                    boardId: router.query.boardId
                }
            })
            setDislikeCount(result.data.dislikeBoard);
        } catch(error){
            if (error instanceof ApolloError) {
                console.log(error.message);
            } 
        }
    }

    const onClickMoveToListPage = (): void => {
        router.push(`/boards/list/1`);    
    }

    const onClickMoveToEditPage = (): void => {
        router.push(`/boards/edit/${router.query.boardId}`);    
    }

    const onClickCopyCurrentURL = (): void => {
        navigator.clipboard.writeText(window.location.href);
        alert("주소가 클립보드에 복사되었습니다.")
    }

    // 4. Helper Functions
    const onErrorYoutubePlayer = (): void => {
        setIsYoutubePlayerError(true);
    }
    return (
        <div>
            <BoardDetailUI
            fetchBoardData={fetchBoardData}
            likeCount={likeCount}
            dislikeCount={dislikeCount}
            isYoutubePlayerError={isYoutubePlayerError}
            fullAddress={fullAddress}

            onClickMoveToListPage={onClickMoveToListPage}
            onClickMoveToEditPage={onClickMoveToEditPage}
            onClickDeleteBoard={onClickDeleteBoard}
            onClickLike={onClickLike}
            onClickDislike={onClickDislike}
            
            onErrorYoutubePlayer={onErrorYoutubePlayer}
            onClickCopyCurrentURL={onClickCopyCurrentURL}
            />
        </div>
        )
}