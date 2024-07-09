export default function BoardsDetailPage(){

    return (
        <Wrraper>
            <InfoWrapper>
                <ProfileImage src="/images/profile.png" />
                <ProfileWrapper>
                    <Writer>TEN</Writer>
                    <CreateAt>2024.07.04</CreateAt>
                </ProfileWrapper>
                <InfoImage src="/images/ic_link.png" />
                <InfoImage src="/images/ic_location.png" />
            </InfoWrapper>
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
                    102
                </HateWrapper>
            </LikeFunctionWrapper>
        </Wrraper>
    )
}