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
    Image
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
            </PostWrapper>
        </Wrraper>
    )
}