import Modal from "antd/es/modal/Modal";
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
    CommentHeaderWrapper,
    WriterStarWrapper,
    IconWrapper,
    CommentWriter,
    CommentContent,
    CommentCreatedAt,
    CommentInputHeaderWrapper,
    CommentInputWriter,
    CommentInputPassword,
    MdClearIcon,
    MdModeEditIcon,
    DeleteModal,
    EditModal,
    ModalFieldLabel,
    DeleteModalContent,
    DeleteModalInput,
    EditModalContent,
    EditModalInput,
    EditModalStarWrapper
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
                    <DeleteButton onClick={props.onClickDeleteBoard}>삭제</DeleteButton>
                </CrudButtonGroupWrapper>
                <CommentFormWrapper>
                    {/* isModalOpen이 활성화되면, modalMode(DELETE 또는 EDIT)에 따라 모달 활성화*/}
                    {props.isModalOpen && (
                        props.modalMode === "DELETE" ? (
                            <DeleteModal title={"댓글 삭제"} open={true} onOk={props.onClickDeleteComment} onCancel={props.onToggleModal} mask={true}>
                                <DeleteModalContent>작성자만 댓글을 삭제할 수 있습니다.<br/>댓글 작성 시 입력하신 비밀번호를 입력하여 삭제를 진행해 주세요.</DeleteModalContent>
                                <DeleteModalInput type="password" placeholder="비밀번호를 입력해주세요." onInput={props.onInputCommentDeletePassword}/>
                            </DeleteModal>
                        ) : props.modalMode === "EDIT" ? (
                            <EditModal title={"댓글 수정"} open={true} onOk={props.onClickDeleteComment} onCancel={props.onToggleModal} mask={true}>
                                    <EditModalContent>작성자만 댓글을 수정할 수 있습니다.<br/>댓글 작성 시 입력하신 비밀번호를 입력하여 수정을 진행해 주세요.</EditModalContent>
                                    <div>
                                        <ModalFieldLabel>댓글내용:</ModalFieldLabel>
                                        <EditModalInput type="text" placeholder="댓글 내용을 입력해주세요."/>
                                    </div>
                                    <div>
                                        <ModalFieldLabel>비밀번호:</ModalFieldLabel>
                                        <EditModalInput type="text" placeholder="비밀번호를 입력해주세요."/>
                                    </div>
                                    <EditModalStarWrapper>
                                        <ModalFieldLabel>별점:</ModalFieldLabel>
                                        {[...Array(props.starRating)].map((_, index) => (
                                                <IoMdStarIconActive key={index} onClick={props.onClickStarRatingDecrease}></IoMdStarIconActive>
                                            ))}
                                        {[...Array(5-(props.starRating ?? 0))].map((_, index) => (
                                            <IoMdStarIconDisabled key={index} onClick={props.onClickStarRatingIncrease}></IoMdStarIconDisabled>
                                        ))}
                                    </EditModalStarWrapper>
                            </EditModal>
                        ) : null
                    )}
                    <CommentSectionTitleWrapper>
                        <FaRegCommentDotsIcon></FaRegCommentDotsIcon>
                        <CommentLabel>댓글</CommentLabel>
                    </CommentSectionTitleWrapper>
                    {props.isCommentInputOpen && (
                        <CommentInsertWrapper>
                            <CommentInputHeaderWrapper>
                                <CommentInputWriter type="text" onInput={props.onInputCommentWriter} placeholder="작성자"></CommentInputWriter>
                                <CommentInputPassword type="password" onInput={props.onInputCommentPassword} placeholder="비밀번호"></CommentInputPassword>
                                <StarWrapper>
                                    {/* isModalOpen이 활성화시, 댓글 등록창의 별점 비활성화 */}
                                    {props.isModalOpen ? (
                                        <div>
                                            {[...Array(5)].map((_, index) => (
                                            <IoMdStarIconDisabled key={index}></IoMdStarIconDisabled>
                                            ))}
                                        </div>
                                    ) : (
                                        <div>
                                            {[...Array(props.starRating)].map((_, index) => (
                                            <IoMdStarIconActive key={index} onClick={props.onClickStarRatingDecrease}></IoMdStarIconActive>
                                            ))}
                                            {[...Array(5-(props.starRating ?? 0))].map((_, index) => (
                                                <IoMdStarIconDisabled key={index} onClick={props.onClickStarRatingIncrease}></IoMdStarIconDisabled>
                                            ))}
                                        </div>
                                    )}
                                </StarWrapper>
                            </CommentInputHeaderWrapper>
                            <CommentInputWrapper>
                                <CommentInputContent type="text" maxLength={100} onInput={props.onInputCommentContent} placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."></CommentInputContent>
                                <CommentInputFooter>{props.commentContentLength}/{100}</CommentInputFooter>
                                <CommentSubmitButton onClick={props.onClickSubmitComment}>등록하기</CommentSubmitButton>
                            </CommentInputWrapper>
                        </CommentInsertWrapper>
                    )}
                    {props.fetchBoardCommentsData?.fetchBoardComments.map((el: FetchBoardComment) => (
                        <CommentDetailWrapper key={el._id}>
                            <CommentProfileIcon src="/images/profile.png" />
                            <CommentInfoWrapper>
                                <CommentHeaderWrapper>
                                    <WriterStarWrapper>
                                        <CommentWriter>{el.writer}</CommentWriter>
                                        <StarWrapper>
                                            {[...Array(el.rating)].map((_, index) => (
                                                <IoMdStarIconActive key={index}></IoMdStarIconActive>
                                            ))}
                                            {[...Array(5-el.rating)].map((_, index) => (
                                                <IoMdStarIconDisabled key={index}></IoMdStarIconDisabled>
                                            ))}
                                        </StarWrapper>
                                    </WriterStarWrapper>
                                    <IconWrapper>
                                        <MdModeEditIcon onClick={() => props.onClickOpenEditModal(el._id, el.rating)}/>
                                        <MdClearIcon onClick={() => props.onClickOpenDeleteModal(el._id)}/>
                                    </IconWrapper>
                                </CommentHeaderWrapper>
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