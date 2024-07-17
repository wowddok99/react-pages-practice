import styled from "@emotion/styled";

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
  margin-top: 2rem;
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
