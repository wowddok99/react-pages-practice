import {
    Wrraper,
    InfoImageProfile,
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
} from "../../../styles/boardsDetail"

export default function BoardsDetailPage(){

    return (
        <Wrraper>
            <ProfileWrapper>
                <InfoImageProfile src="/images/profile.png" />
                <InfoWrapper>
                    <Writer>TEN</Writer>
                    <CreateAt>2024.07.04</CreateAt>
                </InfoWrapper>
                <InfoImage src="/images/ic_link.png" />
                <InfoImage src="/images/ic_location.png" />
            </ProfileWrapper>
            <Line></Line>
            <PostWrapper>
                <Title>게시글 제목입니다.</Title>
                <Image></Image>
                <Contents>12321321321321312312321312312312312312312312312312321312312312</Contents>
                <Youtube></Youtube>
            </PostWrapper>
            <LikeFunctionWrapper>
                <LikeWrapper>
                    <LikeButton src="/images/ic_thumb_up.png"></LikeButton>
                    144
                </LikeWrapper>
                <HateWrapper>
                    <HateButton src="/images/ic_thumb_down.png"></HateButton>
                    100
                </HateWrapper>
            </LikeFunctionWrapper>
        </Wrraper>
    )
}