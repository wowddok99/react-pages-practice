import styled from "@emotion/styled";
import { FaRegCommentDots } from "@react-icons/all-files/fa/FaRegCommentDots";
import { IoMdStar } from "@react-icons/all-files/io/IoMdStar";
import { MdClear } from "@react-icons/all-files/md/MdClear";
import { MdModeEdit } from "@react-icons/all-files/md/MdModeEdit";
import { Modal } from 'antd'

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
    border: none;
    box-shadow: 0rem 0rem 0.625rem gray;
    gap: 1.5rem;
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
  margin-top: 2rem;
  justify-content: center;
  gap: 0.7rem;
`

export const LikeButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const HateButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const LikeIcon = styled.img`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
`

export const HateIcon = styled.img`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
`

export const CrudButtonGroupWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-bottom: 0.0625rem solid #bdbdbd;
  justify-content: center;
  gap: 2rem;
`

export const ListButton = styled.button`
  width: 11.1875rem;
  height: 3.25rem;
  border: 0.0625rem solid #bdbdbd;
  cursor: pointer;
  background-color: white;
`

export const EditButton = styled.button`
  width: 11.1875rem;
  height: 3.25rem;
  border: 0.0625rem solid #bdbdbd;
  cursor: pointer;
  background-color: white;
`
export const DeleteButton = styled.button`
  width: 11.1875rem;
  height: 3.25rem;
  border: 1px solid #bdbdbd;
  background-color: white;
  cursor: pointer;
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
  margin-bottom: 1.5rem;
`
export const CommentDetailWrapper = styled.div`
  display: flex;
  border-bottom: 0.0625rem solid #BDBDBD;
  padding-bottom: 0.9375rem;
  gap: 1rem;
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

export const IoMdStarIconActive = styled(IoMdStar)`
  width: 1.2rem;
  height: 1.2rem;
  color: #FFD600;
  cursor: pointer;
`

export const IoMdStarIconDisabled = styled(IoMdStar)`
  width: 1.2rem;
  height: 1.2rem;
  color: #BDBDBD;
  cursor: pointer;
`

export const CommentInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const CommentInputContent = styled.input`
  width: 100%;
  height: 6.8125rem;
  border: 0.0625rem solid #000;
  border-top-left-radius: 0.1875rem;
  border-top-right-radius: 0.1875rem;
  padding-left: 1.25rem;
`

export const CommentInputFooter = styled.div`
  display: flex;
  width: 100%;
  height: 2.5rem;
  border-bottom: 0.0625rem solid #000;
  border-left: 0.0625rem solid #000;
  border-right: 0.0625rem solid #000;
  border-bottom-left-radius: 0.1875rem;
  border-bottom-right-radius: 0.1875rem;
  padding-left: 1.25rem;
  font-size: 0.75rem;
  color: #888;
  align-items: center;
` 

export const CommentSubmitButton = styled.button`
  position: absolute;
  width: 5.6875rem;
  height: 2.5rem;
  margin-top: 6.8125rem;
  margin-left: 62.7563rem;
  border: none;
  border-bottom-right-radius: 3px;
  font-size: 0.8125rem;
  color: white;
  background-color: black;
  cursor: pointer;
`

export const CommentProfileIcon = styled.img`
  width: 2.625rem;
  height: 2.625rem;
`

export const CommentInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.3125rem;
`

export const CommentHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const WriterStarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3125rem;
`

export const CommentWriter = styled.div`
  font-weight: bold;
`

export const CommentContent = styled.div`
`

export const CommentCreatedAt = styled.div`
  font-size: 0.75rem;
  color: #BDBDBDBD;
`

export const CommentInputHeaderWrapper = styled.div`
  display: flex;
  gap: 0.625rem;
  align-items: center;
`

export const CommentInputWriter = styled.input`
  width: 7.5rem;
  height: 2.5rem;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  border: 0.0625rem solid #bdbdbd;
  border-radius: 0.1875rem;
`

export const CommentInputPassword = styled.input`
  width: 7.5rem;
  height: 2.5rem;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  border: 0.0625rem solid #bdbdbd;
  border-radius: 0.1875rem;
`

export const MdClearIcon = styled(MdClear)`
  cursor: pointer;
  width: 1.3rem;
  height: 1.3rem;
  color: #bdbdbd;
`

export const MdModeEditIcon = styled(MdModeEdit)`
  cursor: pointer;
  width: 1.3rem;
  height: 1.3rem;
  color: #bdbdbd;
`

export const DeleteModal = styled(Modal)`
`;

export const EditModal = styled(Modal)`
`;


export const DeleteModalContent = styled.div`
`

export const DeleteModalInput = styled.input`
  width: 100%;
  height: 2rem;
  padding-left: 0.1rem;
  padding-right: 0.1rem;
  margin-top: 0.5rem;
`;

export const EditModalContent = styled.div`
`

export const EditModalInput = styled.input`
  width: 80%;
  height: 2rem;
  padding-left: 0.1rem;
  padding-right: 0.1rem;
  margin-top: 0.5rem;
`;