import styled from "@emotion/styled";

export const PageLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
`

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5rem;
    width: 100%;
`

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 3rem;
    padding-bottom: 3rem;
    padding-left: 4rem;
    padding-right: 4rem;
    gap: 3rem;
    border: none;
    box-shadow: 0rem 0rem 0.625rem gray;
`
export const CardHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.4rem;
  border-bottom: 0.125rem solid black;
`

export const CardMainWrapper = styled.div`
    display: flex;
    flex-direction: column;
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
  font-size: 2rem;
`

export const CreateAt = styled.div`
  font-size: 1rem;
`

export const ProfileImage = styled.img`
  width: 2.9169rem;
  height: 2.9169rem;
  cursor: pointer;
`
export const InfoImages = styled.img`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`