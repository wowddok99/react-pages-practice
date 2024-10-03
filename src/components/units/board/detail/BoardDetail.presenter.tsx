import { Tooltip } from "antd";
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
    LinkIcon,
    Subject,
    Image,
    Contents,
    YoutubePlayerWrapper,
    YoutubePlayer,
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
                                <Writer>{props.fetchBoardData?.fetchBoard.writer}</Writer>
                                <CreateAt>{props.fetchBoardData?.fetchBoard.createdAt}</CreateAt>                                    
                            </WriterCreatedAtWrapper>
                        </InfoWrapper>
                        <CardHeaderLogoWrapper>
                            <LinkIcon src="/images/ic_link.png" onClick={props.onClickCopyCurrentURL} />
                            <Tooltip placement="top" title={props.fullAddress}>
                                <LinkIcon src="/images/ic_location.png" />
                            </Tooltip>
                        </CardHeaderLogoWrapper>
                    </CardHeaderWrapper>
                    <CardMainWrapper>
                        <Subject>{props.fetchBoardData?.fetchBoard.title}</Subject>
                        {props.fetchBoardData?.fetchBoard.images.map((el)=>(
                            <Image src={`https://storage.googleapis.com/${el}`} style={{ display: props.fetchBoardData?.fetchBoard.images[0] ? '' : 'none'}}></Image>
                        ))}
                        <Contents>{props.fetchBoardData?.fetchBoard.contents}</Contents>
                        {!props.isYoutubePlayerError && (
                            <YoutubePlayerWrapper>
                            <YoutubePlayer 
                            url={props.fetchBoardData?.fetchBoard.youtubeUrl}
                            style={{display: props.fetchBoardData?.fetchBoard.youtubeUrl ? 'block' : 'none'}}
                            controls={true}
                            onError={props.onErrorYoutubePlayer}
                            />
                            </YoutubePlayerWrapper>
                        )}
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