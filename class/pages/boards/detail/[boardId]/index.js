import { useRouter } from "next/router"
import { gql, useQuery } from "@apollo/client"
import {
    Wrraper,
    ProfileImage,
    ProfileWrapper,
    Line,
    InfoWrapper,
    InfoImage,
    Writer,
    CreateAt,
    PostWrapper,
    Title,
    Image,
    Contents,
    Youtube,
    LikeFunctionWrapper,
    LikeWrapper,
    HateWrapper,
    LikeButton,
    HateButton
} from "../../../../styles/boardsDetail"

export const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
        fetchBoard(boardId:$boardId){
            _id
            writer
            title
            contents
            createdAt
        }
    }
`;

export default function BoardsDetailMarginPage(){
    const router = useRouter();

    const {data} = useQuery(FETCH_BOARD, {
        variables: {
            boardId: router.query.boardId
        }
    })

    console.log(data?.fetchBoard)
    console.log(router.query.boardId);

    return (
        <Wrraper>
            <InfoWrapper>
                <ProfileImage src="/images/profile.png" />
                <ProfileWrapper>
                    <Writer>{data?.fetchBoard?.writer}</Writer>
                    <CreateAt>{data?.fetchBoard?.createdAt}</CreateAt>
                </ProfileWrapper>
                <InfoImage src="/images/ic_link.png" />
                <InfoImage src="/images/ic_location.png" />
            </InfoWrapper>
            <Line></Line>
            <PostWrapper>
                <Title>{data?.fetchBoard?.title}</Title>
                <Image></Image>
                <Contents>{data?.fetchBoard?.contents}</Contents>
                <Youtube></Youtube>
            </PostWrapper>
            <LikeFunctionWrapper>
                <LikeWrapper>
                    <LikeButton src="/images/ic_thumb_up.png"></LikeButton>
                    144
                </LikeWrapper>
                <HateWrapper>
                    <HateButton src="/images/ic_thumb_down.png"></HateButton>
                    102
                </HateWrapper>
            </LikeFunctionWrapper>
        </Wrraper>
    )
}