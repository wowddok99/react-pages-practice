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
    DeleteButton,
    CommentFormWrapper,
    CommentSectionTitleWrapper,
    CommentInsertWrapper,
    CommentListWrapper,
    FaRegCommentDotsIcon,
    CommentLabel,
    StarWrapper,
    IoMdStarOutlineIcon,
    IoMdStarIcon,
    CommentInputWrapper,
    CommentInputHeader,
    CommentInputFooter
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
                <CommentFormWrapper>
                    <CommentSectionTitleWrapper>
                        <FaRegCommentDotsIcon></FaRegCommentDotsIcon>
                        <CommentLabel>댓글</CommentLabel>
                    </CommentSectionTitleWrapper>
                    <CommentInsertWrapper>
                        <StarWrapper>
                            <IoMdStarIcon></IoMdStarIcon>
                            <IoMdStarIcon></IoMdStarIcon>
                            <IoMdStarIcon></IoMdStarIcon>
                            <IoMdStarIcon></IoMdStarIcon>
                            <IoMdStarIcon></IoMdStarIcon>
                        </StarWrapper>
                        <CommentInputWrapper>
                            <CommentInputHeader placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."></CommentInputHeader>
                            <CommentInputFooter>0/100</CommentInputFooter>
                        </CommentInputWrapper>
                    </CommentInsertWrapper>
                </CommentFormWrapper>
            </MainWrapper>
        </PageLayout>
    )
}