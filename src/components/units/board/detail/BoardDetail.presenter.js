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
    CommentDetailWrapper,
    FaRegCommentDotsIcon,
    CommentLabel,
    StarWrapper,
    IoMdStarIconActive,
    IoMdStarIconDisabled,
    CommentInputWrapper,
    CommentInputHeader,
    CommentInputFooter,
    CommentSubmitButton,
    CommentProfileIcon,
    CommentInfoWrapper,
    CommentWriterWithStarWrapper,
    CommentWriter,
    CommentContent,
    CommentCreatedAt
    
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
                            <IoMdStarIconDisabled></IoMdStarIconDisabled>
                            <IoMdStarIconDisabled></IoMdStarIconDisabled>
                            <IoMdStarIconDisabled></IoMdStarIconDisabled>
                            <IoMdStarIconDisabled></IoMdStarIconDisabled>
                            <IoMdStarIconDisabled></IoMdStarIconDisabled>
                        </StarWrapper>
                        <CommentInputWrapper>
                            <CommentInputHeader placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."></CommentInputHeader>
                            <CommentInputFooter>0/100</CommentInputFooter>
                            <CommentSubmitButton>등록하기</CommentSubmitButton>
                        </CommentInputWrapper>
                    </CommentInsertWrapper>
                    <CommentDetailWrapper>
                        <CommentProfileIcon src="/images/profile.png" />
                        <CommentInfoWrapper>
                            <CommentWriterWithStarWrapper>
                                <CommentWriter>Ten</CommentWriter>
                                <StarWrapper>
                                    <IoMdStarIconActive></IoMdStarIconActive>
                                    <IoMdStarIconActive></IoMdStarIconActive>
                                    <IoMdStarIconActive></IoMdStarIconActive>
                                    <IoMdStarIconActive></IoMdStarIconActive>
                                    <IoMdStarIconDisabled></IoMdStarIconDisabled>
                                </StarWrapper>
                            </CommentWriterWithStarWrapper>
                            <CommentContent>댓글 내용 테스트입니다.</CommentContent>
                            <CommentCreatedAt>2024.08.08</CommentCreatedAt>
                        </CommentInfoWrapper>
                    </CommentDetailWrapper>
                </CommentFormWrapper>
            </MainWrapper>
        </PageLayout>
    )
}