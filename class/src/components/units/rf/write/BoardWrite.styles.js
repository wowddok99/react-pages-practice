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
    gap: 1.7rem;
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
    width: 30rem;
    height: 3rem;
    border: 0.0625rem solid #bdbdbd;
`

export const Password = styled.input`
    width: 30rem;
    height: 3rem;
    border: 0.0625rem solid #bdbdbd;
`

export const SubjectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
`

export const Subject = styled.input`
    width: 60.5rem;
    height: 3rem;
    border: 0.0625rem solid #bdbdbd;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
`

export const Content = styled.input`
    width: 60.5rem;
    height: 32.5rem;
    border: 0.0625rem solid #bdbdbd;
`
export const AddressWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
`

export const ZipcodeWrapper = styled.div`
    display: flex;

`

export const ZipCode = styled.input`
    width: 20rem;
    height: 3.25rem;
    border: 0.0625rem solid #bdbdbd;
`

export const SearchButton = styled.button`
    font-family: "NotoSansKR-Regular";
    background-color: black;
    border: 0.0625rem solid #bdbdbd;
    width: 7.75rem;
    height: 3.5rem;
    cursor: pointer;
    color: white;
`