import styled from "@emotion/styled";
import { FaRegCommentDots } from "@react-icons/all-files/fa/FaRegCommentDots";
import { IoMdStarOutline } from "@react-icons/all-files/io/IoMdStarOutline";
import { IoMdStar } from "@react-icons/all-files/io/IoMdStar";

export const PageLayout = styled.div`
    word-break: break-all;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
`

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5rem;
    width: 78.5rem; // 필요시 %로 width 비율 조절
    /* width: 90%; */
`

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 7rem;
    padding-bottom: 7rem;
    padding-left: 7rem;
    padding-right: 7rem;
    gap: 1.5rem;
    border: none;
    box-shadow: 0rem 0rem 0.625rem gray;
`
export const CardHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.4rem;
  border-bottom: 0.0625rem solid #bdbdbd;
`

export const CardMainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const CardHeaderLogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const WriterCreatedAtWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const Writer = styled.div`
  font-size: 1.5rem;
`

export const CreateAt = styled.div`
  font-size: 1rem;
`

export const ProfileIcon = styled.img`
  width: 2.9169rem;
  height: 2.9169rem;
  cursor: pointer;
`
export const InfoIcon = styled.img`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`

export const Subject = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`

export const Image = styled.div`
  width: 100%;
  height: 40rem;
  background-color: whitesmoke;
`

export const Contents = styled.div`
`

export const YoutubeWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`

export const Youtube = styled.div`
  width: 40%;
  height: 20rem;
  background-color: whitesmoke;
`

export const LikeHateButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.7rem;
  margin-top: 5rem;
`

export const LikeButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const HateButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const LikeIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`

export const HateIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`

export const CrudButtonGroupWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #bdbdbd;
`

export const ListButton = styled.button`
  cursor: pointer;
  background-color: white;
  width: 11.1875rem;
  height: 3.25rem;
  border: 1px solid #bdbdbd;
`

export const EditButton = styled.button`
  cursor: pointer;
  background-color: white;
  width: 11.1875rem;
  height: 3.25rem;
  border: 1px solid #bdbdbd;
`
export const DeleteButton = styled.button`
  cursor: pointer;
  background-color: white;
  width: 11.1875rem;
  height: 3.25rem;
  border: 1px solid #bdbdbd;
`

export const CommentFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const CommentSectionTitleWrapper = styled.div`
  display: flex;
  gap: 0.6rem;
`

export const CommentInsertWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
export const CommentListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const FaRegCommentDotsIcon = styled(FaRegCommentDots)`
  margin-top: 0.2rem;
  width: 1.5rem;
  height: 1.5rem;
  color: #FFD600;
`

export const CommentLabel = styled.label`
  width: 2.125rem;
  height: 1.6875rem;
  font-size: 1.125rem;
`

export const StarWrapper = styled.div`
  display: flex;
`
export const IoMdStarOutlineIcon = styled(IoMdStarOutline)`
  cursor: pointer;
  color: gray;
  width: 1.2rem;
  height: 1.2rem;
`

export const IoMdStarIcon = styled(IoMdStar)`
  cursor: pointer;
  color: gray;
  width: 1.2rem;
  height: 1.2rem;
`

export const CommentInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const CommentInputHeader = styled.input`
  padding-left: 20px;
  width: 100%;
  height: 6.8125rem;
  border: 0.0625rem solid #000;
  border-top-left-radius: 0.1875rem;
  border-top-right-radius: 0.1875rem;
`

export const CommentInputFooter = styled.div`
  font-size: 12px;
  color: #888;
  display: flex;
  align-items: center;
  padding-left: 1.25rem;
  width: 100%;
  height: 2.5rem;
  border-bottom: 0.0625rem solid #000;
  border-left: 0.0625rem solid #000;
  border-right: 0.0625rem solid #000;
  border-bottom-left-radius: 0.1875rem;
  border-bottom-right-radius: 0.1875rem;
` 