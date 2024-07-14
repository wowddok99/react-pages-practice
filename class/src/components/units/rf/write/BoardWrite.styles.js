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
    padding-top: 3rem;
    padding-bottom: 3rem;
    padding-left: 4rem;
    padding-right: 4rem;
    gap: 3rem;
    border: none;
    box-shadow: 0rem 0rem 0.625rem gray;
`

export const CardHeaderWrapper = styled.div`
`

export const CardMainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
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
    gap: 1rem;
`

export const ZipcodeWrapper = styled.div`
    display: flex;
    gap: 0.4rem;
`

export const ZipCode = styled.input`
    width: 7rem;
    height: 3rem;
    border: 0.0625rem solid #bdbdbd;
`

export const SearchButton = styled.button`
    font-family: "NotoSansKR-Regular";
    background-color: black;
    border: 0.0625rem solid #bdbdbd;
    width: 7.75rem;
    height: 3rem;
    cursor: pointer;
    color: white;
`

export const Address = styled.input`
    width: 60.5rem;
    height: 3rem;
    border: 0.0625rem solid #bdbdbd;
`

export const YoutubeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
`

export const Youtube = styled.input`
    width: 60.5rem;
    height: 3rem;
    border: 0.0625rem solid #bdbdbd;
`

export const ImageUploadWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
`

export const ImageUploadButtonWrapper = styled.div`
    display: flex;
    gap: 0.4rem;
`

export const ImageUploadButton = styled.button`
    font-size: 0.875rem;
    color: #4F4F4F;
    height: 4.875rem;
    width: 4.875rem;
    margin-right: 1.5rem;
    border: none;
    cursor: pointer;
`

export const MainOptionWrapper = styled.div`
    display: flex;
    gap: 1rem;
`

export const MainOptionRadioWrapper = styled.div`
    display: flex;
    gap: 0.4rem;
`

export const MainOptionRadioButton = styled.input`
`

export const SubmitButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const SubmitButton = styled.button`
    background-color: ${(props) => props.isActive === true ? "#FFD600" : ""};
    width: 11.1875rem;
    height: 3.25rem;
    border: none;
    cursor: pointer;
`

export const Error = styled.div`
    color: red;
    font-size: 0.875rem;
    margin-top: -0.4rem;
`