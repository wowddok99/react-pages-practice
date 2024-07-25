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
    ProfileIcon,
    InfoIcon,
    Subject,
    Image,
    Contents,
    YoutubeWrapper,
    Youtube,
    LikeHateButtonWrapper,
    LikeButtonWrapper,
    HateButtonWrapper,
    LikeIcon,
    HateIcon,
    CrudButtonGroupWrapper,
    ListButton,
    EditButton,
    DeleteButton
} from "./BoardDetail.styles"

export default function BoardDetailUI(props){
    return (
        <PageLayout>
            <MainWrapper>
                <CardWrapper>
                    <CardHeaderWrapper>
                        <InfoWrapper>
                            <ProfileIcon src="/images/profile.png" />
                            <WriterCreatedAtWrapper>
                                <Writer>{props.data?.fetchBoard?.writer}</Writer>
                                <CreateAt>{props.data?.fetchBoard?.createdAt}</CreateAt>                                    
                            </WriterCreatedAtWrapper>
                        </InfoWrapper>
                        <CardHeaderLogoWrapper>
                            <InfoIcon src="/images/ic_link.png" />
                            <InfoIcon src="/images/ic_location.png" />
                        </CardHeaderLogoWrapper>
                    </CardHeaderWrapper>
                    <CardMainWrapper>
                        <Subject>{props.data?.fetchBoard?.title}</Subject>
                        <Image></Image>
                        <Contents>{props.data?.fetchBoard?.contents}</Contents>
                        <YoutubeWrapper>
                            <Youtube></Youtube>
                        </YoutubeWrapper>
                        <LikeHateButtonWrapper>
                            <LikeButtonWrapper>
                                <LikeIcon src="/images/ic_thumb_up.png"></LikeIcon>
                                144
                            </LikeButtonWrapper>
                            <HateButtonWrapper>
                                <HateIcon src="/images/ic_thumb_down.png"></HateIcon>
                                155
                            </HateButtonWrapper>
                        </LikeHateButtonWrapper>
                    </CardMainWrapper>
                </CardWrapper>
                <CrudButtonGroupWrapper>
                    <ListButton onClick={props.onClickMoveToListPage}>목록</ListButton>
                    <EditButton onClick={props.onClickMoveToEditPage}>수정</EditButton>
                    <DeleteButton onClick={props.onClickDelete}>삭제</DeleteButton>
                </CrudButtonGroupWrapper>
            </MainWrapper>
        </PageLayout>
    )
}