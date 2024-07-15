import {
    PageLayout,
    MainWrapper,
    CardWrapper,
    CardHeaderWrapper,
    CardMainWrapper,
    InfoWrapper,
    WriterCreatedAtWrapper,
    Writer,
    CreateAt,
    CardHeaderLogoWrapper,
    ProfileImage,
    InfoImages,
    Subject,
    Image,
    Contents,
    YoutubeWrapper,
    Youtube,
    LikeHateButtonWrapper,
    LikeButtonWrapper,
    HateButtonWrapper,
    LikeButton,
    HateButton

} from "./BoardDetail.styles"

export default function BoardDetailUI(props){
    return (
        <PageLayout>
            <MainWrapper>
                <CardWrapper>
                    <CardHeaderWrapper>
                        <InfoWrapper>
                            <ProfileImage src="/images/profile.png" />
                            <WriterCreatedAtWrapper>
                                <Writer>{props.data?.fetchBoard?.writer}</Writer>
                                <CreateAt>{props.data?.fetchBoard?.createdAt}</CreateAt>                                    
                            </WriterCreatedAtWrapper>
                        </InfoWrapper>
                        <CardHeaderLogoWrapper>
                            <InfoImages src="/images/ic_link.png" />
                            <InfoImages src="/images/ic_location.png" />
                        </CardHeaderLogoWrapper>
                    </CardHeaderWrapper>
                    <CardMainWrapper>
                        <Subject>{props.data?.fetchBoard?.title}</Subject>
                        <Image></Image>
                        <Contents>"{props.data?.fetchBoard?.contents}"</Contents>
                        <YoutubeWrapper>
                            <Youtube></Youtube>
                        </YoutubeWrapper>
                        <LikeHateButtonWrapper>
                            <LikeButtonWrapper>
                                <LikeButton src="/images/ic_thumb_up.png"></LikeButton>
                                144
                            </LikeButtonWrapper>
                            <HateButtonWrapper>
                                <HateButton src="/images/ic_thumb_down.png"></HateButton>
                                155
                            </HateButtonWrapper>
                        </LikeHateButtonWrapper>
                    </CardMainWrapper>
                </CardWrapper>
            </MainWrapper>
        </PageLayout>
    )
}