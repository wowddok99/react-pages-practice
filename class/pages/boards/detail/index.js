import {
    Wrraper,
    Profile,
    ProfileWrapper,
    Line,
    InfoWrapper,
    InfoImage,
    Writer,
    CreateAt
} from "../../../styles/boardsDetail"

export default function BoardsDetailPage(){

    return (
        <Wrraper>
            <ProfileWrapper>
                <Profile src="/images/profile.png" />
                <InfoWrapper>
                    <Writer>TEN</Writer>
                    <CreateAt>2024.07.04</CreateAt>
                </InfoWrapper>
                <InfoImage src="/images/ic_link.png" />
                <InfoImage src="/images/ic_location.png" />
            </ProfileWrapper>
            <Line></Line>
        </Wrraper>
    )
}