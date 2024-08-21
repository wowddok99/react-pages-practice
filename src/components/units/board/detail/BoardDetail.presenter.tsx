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
    CommentInputContent,
    CommentInputFooter,
    CommentSubmitButton,
    CommentProfileIcon,
    CommentInfoWrapper,
    CommentWriterWithStarWrapper,
    CommentWriter,
    CommentContent,
    CommentCreatedAt,
    CommentInputHeaderWrapper,
    CommentInputWriter,
    CommentInputPassword,
    MdClearIcon,
    MdModeEditIcon
} from "./BoardDetail.styles"

import { BoardDetailUIProps, FetchBoardComment } from "./BoardDetail.types";

export default function BoardDetailUI(props: BoardDetailUIProps){
    return (
        <PageLayout>
            <MainWrapper>
                <CardWrapper>
                    <CardHeaderWrapper>
                        <InfoWrapper>
                            <ProfileIcon src="/images/profile.png" />
                            <WriterCreatedAtWrapper>
                                <Writer>{props.fetchBoardData?.fetchBoard?.writer}</Writer>
                                <CreateAt>{props.fetchBoardData?.fetchBoard?.createdAt}</CreateAt>                                    
                            </WriterCreatedAtWrapper>
                        </InfoWrapper>
                        <CardHeaderLogoWrapper>
                            <InfoIcon src="/images/ic_link.png" />
                            <InfoIcon src="/images/ic_location.png" />
                        </CardHeaderLogoWrapper>
                    </CardHeaderWrapper>
                    <CardMainWrapper>
                        <Subject>{props.fetchBoardData?.fetchBoard?.title}</Subject>
                        <Image></Image>
                        <Contents>{props.fetchBoardData?.fetchBoard?.contents}</Contents>
                        <YoutubeWrapper>
                            <Youtube></Youtube>
                        </YoutubeWrapper>
                        <LikeHateButtonWrapper>
                            <LikeButtonWrapper>
                                <LikeIcon src="/images/ic_thumb_up.png" onClick={props.onClickLike}></LikeIcon>
                                {props.likeCount}
                            </LikeButtonWrapper>
                            <HateButtonWrapper>
                                <HateIcon src="/images/ic_thumb_down.png" onClick={props.onClickDislike}></HateIcon>
                                {props.dislikeCount}
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
                        <CommentInputHeaderWrapper>
                            <CommentInputWriter type="text" onInput={props.onInputCommentWriter} placeholder="작성자"></CommentInputWriter>
                            <CommentInputPassword type="password" onInput={props.onInputCommentPassword} placeholder="비밀번호"></CommentInputPassword>
                            <StarWrapper>
                                {[...Array(props.starRating)].map((_, index) => (
                                    <IoMdStarIconActive key={index} onClick={props.onClickStarRatingDecrease}></IoMdStarIconActive>
                                ))}
                                {[...Array(5-(props.starRating ?? 0))].map((_, index) => (
                                    <IoMdStarIconDisabled key={index} onClick={props.onClickStarRatingIncrease}></IoMdStarIconDisabled>
                                ))}
                            </StarWrapper>
                        </CommentInputHeaderWrapper>
                        <CommentInputWrapper>
                            <CommentInputContent type="text" maxLength={100} onInput={props.onInputCommentContent} placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."></CommentInputContent>
                            <CommentInputFooter>{props.commentContentLength}/{100}</CommentInputFooter>
                            <CommentSubmitButton onClick={props.onClickSubmitComment}>등록하기</CommentSubmitButton>
                        </CommentInputWrapper>
                    </CommentInsertWrapper>
                    {props.fetchBoardCommentsData?.fetchBoardComments.map((el: FetchBoardComment) => (
                        <CommentDetailWrapper key={el._id}>
                            <CommentProfileIcon src="/images/profile.png" />
                            <CommentInfoWrapper>
                                <CommentWriterWithStarWrapper>
                                    <CommentWriter>{el.writer}</CommentWriter>
                                    <StarWrapper>
                                        {[...Array(el.rating)].map((_, index) => (
                                            <IoMdStarIconActive key={index}></IoMdStarIconActive>
                                        ))}
                                        {[...Array(5-el.rating)].map((_, index) => (
                                            <IoMdStarIconDisabled key={index}></IoMdStarIconDisabled>
                                        ))}
                                    </StarWrapper>
                                    <MdClearIcon/>
                                    <MdModeEditIcon/>
                                </CommentWriterWithStarWrapper>
                                <CommentContent>{el.contents}</CommentContent>
                                <CommentCreatedAt>{el.createdAt}</CommentCreatedAt>
                            </CommentInfoWrapper>
                        </CommentDetailWrapper>             
                    ))}
                </CommentFormWrapper>
            </MainWrapper>
        </PageLayout>
    )
}