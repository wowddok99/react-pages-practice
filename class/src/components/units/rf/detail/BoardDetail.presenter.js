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
    InfoImages
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
                                <Writer>Ten</Writer>
                                <CreateAt>2024-07-14T13:54:37.780Z</CreateAt>                                    
                            </WriterCreatedAtWrapper>
                        </InfoWrapper>
                        <CardHeaderLogoWrapper>
                            <InfoImages src="/images/ic_link.png" />
                            <InfoImages src="/images/ic_location.png" />
                        </CardHeaderLogoWrapper>
                    </CardHeaderWrapper>
                </CardWrapper>
            </MainWrapper>
        </PageLayout>
    )
}