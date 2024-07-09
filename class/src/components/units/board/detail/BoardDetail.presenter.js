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
} from "../../../../../styles/boardsDetail"

export default function BoardDetailUI(props){
    return (
        <Wrraper>
            <InfoWrapper>
                <ProfileImage src="/images/profile.png" />
                <ProfileWrapper>
                    <Writer>{props.data?.fetchBoard?.writer}</Writer>
                    <CreateAt>{props.data?.fetchBoard?.createdAt}</CreateAt>
                </ProfileWrapper>
                <InfoImage src="/images/ic_link.png" />
                <InfoImage src="/images/ic_location.png" />
            </InfoWrapper>
            <Line></Line>
            <PostWrapper>
                <Title>{props.data?.fetchBoard?.title}</Title>
                <Image></Image>
                <Contents>{props.data?.fetchBoard?.contents}</Contents>
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