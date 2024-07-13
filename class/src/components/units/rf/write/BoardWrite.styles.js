import styled from "@emotion/styled";

export const PageLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
`
export const HeaderWrapper = styled.div`

`

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5rem;
`

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 4rem;
    padding-right: 4rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    gap: 3rem;
    border: none;
    box-shadow: 0rem 0rem 0.625rem gray;
`

export const CardHeaderWrapper = styled.div`
`

export const CardMainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const CardFooterWrapper = styled.div`
`

export const Title = styled.div`
    font-weight: 700;
    font-size: 2rem;
`

export const WriterPasswordWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
`
export const Label = styled.div`
    font-size: 1rem;
`

export const Writer = styled.input`
    width: 28rem;
    height: 3rem;
    border: 0.0625rem solid #bdbdbd;
`

export const Password = styled.input`
    width: 28rem;
    height: 3rem;
    border: 0.0625rem solid #bdbdbd;
`