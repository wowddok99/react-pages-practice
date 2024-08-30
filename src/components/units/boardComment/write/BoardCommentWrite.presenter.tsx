import { BoardCommentWriteUIProps } from "./BoardCommentWrite.types";

import {
    CommentWriteFormWrapper,
    CommentSectionTitleWrapper,
    FaRegCommentDotsIcon,
    CommentLabel,
    CommentInsertWrapper,
    CommentInputHeaderWrapper,
    CommentInputWriter,
    CommentInputPassword,
    StarWrapper,
    IoMdStarIconActive,
    IoMdStarIconDisabled,
    CommentInputWrapper,
    CommentInputContent,
    CommentInputFooter,
    CommentSubmitButton

} from "./BoardCommentWrite.styles"

export default function BoardCommentWriteUI(props: BoardCommentWriteUIProps){
    return (
        <CommentWriteFormWrapper>
            <CommentSectionTitleWrapper>
                <FaRegCommentDotsIcon></FaRegCommentDotsIcon>
                <CommentLabel>댓글</CommentLabel>
            </CommentSectionTitleWrapper>
            <CommentInsertWrapper>
                <CommentInputHeaderWrapper>
                    <CommentInputWriter type="text" value={props.commentWriter} onInput={props.onInputCommentWriter} placeholder="작성자"></CommentInputWriter>
                    <CommentInputPassword type="password" value={props.commentPassword} onInput={props.onInputCommentPassword} placeholder="비밀번호"></CommentInputPassword>
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
                    <CommentInputContent type="text" value={props.commentContent} maxLength={100} onInput={props.onInputCommentContent} placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."></CommentInputContent>
                    <CommentInputFooter>{props.commentContentLength}/{100}</CommentInputFooter>
                    <CommentSubmitButton onClick={props.onClickSubmitComment}>등록하기</CommentSubmitButton>
                </CommentInputWrapper>
            </CommentInsertWrapper>
        </CommentWriteFormWrapper>
    )
}