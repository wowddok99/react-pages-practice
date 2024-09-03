import { BoardCommentListUIProps, FetchBoardComment } from "./BoardCommentList.types";
import { IoMdStarIconActive, IoMdStarIconDisabled, StarWrapper } from "../write/BoardCommentWrite.styles";
import {
    CommentListFormWrapper,
    DeleteModal,
    EditModal,
    DeleteModalContent,
    DeleteModalInput,
    EditModalInputWrapper,
    ModalInputLabel,
    EditModalInput,
    EditModalStarWrapper,
    CommentListWrapper,
    CommentProfileIcon,
    CommentInfoWrapper,
    CommentHeaderWrapper,
    WriterStarWrapper,
    IconWrapper,
    MdModeEditIcon,
    MdClearIcon,
    CommentWriter,
    CommentContent,
    CommentCreatedAt

} from "./BoardCommentList.styles";

export default function BoardCommentListUI(props: BoardCommentListUIProps){
    return (
        <CommentListFormWrapper>
            {/* isModalOpen이 활성화되면, modalMode(DELETE 또는 EDIT)에 따라 모달 활성화*/}
            {props.isModalOpen && (
                props.modalMode === "DELETE" ? (
                    <DeleteModal title={<span style={{ fontSize: '18px' }}>댓글 삭제</span>} open={true} onOk={props.onClickDeleteComment} onCancel={props.onToggleModal} mask={true}>
                        <DeleteModalContent>작성자만 댓글을 삭제할 수 있습니다.<br/>댓글 작성 시 입력하신 비밀번호를 입력하여 삭제를 진행해 주세요.</DeleteModalContent>
                        <DeleteModalInput type="password" placeholder="비밀번호를 입력해주세요." onInput={props.onInputCommentDeletePassword}/>
                    </DeleteModal>
                ) : props.modalMode === "EDIT" ? (
                    <EditModal title={<span style={{ fontSize: '18px' }}>댓글 수정</span>} open={true} onOk={props.onClickUpdateComment} onCancel={props.onToggleModal} mask={true}>
                        <EditModalInputWrapper>
                            <ModalInputLabel>댓글내용</ModalInputLabel>
                            <EditModalInput type="text" maxLength={100} placeholder="댓글 내용을 입력해주세요." onInput={props.onInputCommentEditContent}/>
                        </EditModalInputWrapper>
                        {/* <EditModalInputWrapper>
                            <ModalInputLabel>별점</ModalInputLabel>
                            <EditModalStarWrapper>
                            {[...Array(props.editStarRating)].map((_, index) => (
                                <IoMdStarIconActive key={index} onClick={props.onClickEditStarRatingDecrease}></IoMdStarIconActive>
                            ))}
                            {[...Array(5-(props.editStarRating ?? 0))].map((_, index) => (
                                <IoMdStarIconDisabled key={index} onClick={props.onClickEditStarRatingIncrease}></IoMdStarIconDisabled>
                            ))}
                            </EditModalStarWrapper>
                        </EditModalInputWrapper> */}
                        <EditModalInputWrapper>
                            <ModalInputLabel>비밀번호</ModalInputLabel>
                            <EditModalInput type="password" placeholder="비밀번호를 입력해주세요." onInput={props.onInputCommentEditPassword}/>
                        </EditModalInputWrapper>
                    </EditModal>
                ) : null
            )}
            {props.fetchBoardCommentsData?.fetchBoardComments.map((el: FetchBoardComment) => (
                <CommentListWrapper key={el._id}>
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
                </CommentListWrapper>  
            ))}            
        </CommentListFormWrapper>
    )
}