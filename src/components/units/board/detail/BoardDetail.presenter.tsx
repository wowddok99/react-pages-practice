import BoardCommentList from "../../boardComment/list/BoardCommentList.container";
import BoardCommentWrite from "../../boardComment/write/BoardCommentWrite.container";
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
    CommentFormWrapper
} from "./BoardDetail.styles"

import { BoardDetailUIProps } from "./BoardDetail.types";

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
                        {/* <Image></Image> */}
                        <Contents>{props.fetchBoardData?.fetchBoard?.contents}</Contents>
                        <YoutubeWrapper>
                            <Youtube 
                            url={props.fetchBoardData?.fetchBoard?.youtubeUrl}
                            style={{ display: props.fetchBoardData?.fetchBoard?.youtubeUrl ? 'block' : 'none' }}
                            />
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
                    <BoardCommentWrite></BoardCommentWrite>
                    <BoardCommentList></BoardCommentList>
                </CommentFormWrapper>
            </MainWrapper>
        </PageLayout>
    )
}