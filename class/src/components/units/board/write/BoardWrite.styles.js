import styled from "@emotion/styled";

export const Wrraper = styled.div`
    
    font-family: "NotoSansKR-Regular";
    width: 68.75rem;
    border: 0.0625rem solid black;
    margin: 6.25rem;
    padding-top: 90px;
    padding-bottom: 6.25rem;
    padding-left: 6.25rem;
    padding-right: 6.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    box-shadow: 0rem 0rem 0.625rem gray;
`

export const Title = styled.div`
    margin-bottom: 3.125rem;
    font-family: "NotoSansKR-Regular";
    font-size: 2.125rem;
    font-weight: bold;

    ::placeholder{
        font-family: "NotoSansKR-Regular";
    }
`

export const WriterPasswordWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const InputWrapper = styled.div`
    margin-bottom: 1.875rem;
    display: flex;
    flex-direction: column;
`

export const Label = styled.div`
    margin-bottom: 0.625rem;
`

export const Writer = styled.input`
    width: 30.375rem;
    height: 3.25rem;
    border: 0.0625rem solid #bdbdbd;
    margin-right: 0.625rem;

    ::placeholder{
        font-family: "NotoSansKR-Regular";
    }
`

export const Password = styled.input`
    width : 30.375rem;
    height: 3.25rem;
    border: 0.0625rem solid #bdbdbd;

    ::placeholder{
        font-family: "NotoSansKR-Regular";
    }
`

export const Subject = styled.input`
    width : 61.5625rem;
    height: 3.25rem;
    border: 0.0625rem solid #bdbdbd;
`

export const Content = styled.input`
    width : 61.5625rem;
    height: 32.5rem;
    border: 0.0625rem solid #bdbdbd;

    ::placeholder{
        font-family: "NotoSansKR-Regular";
    }
`

export const HouseCodeWrapper = styled.div`
    width: 61.5625rem;
    display: flex;
    flex-direction: row;
`

export const HouseCode = styled.input`
    border: 0.0625rem solid #bdbdbd;
    height: 3.25rem;
    width: 4.8125rem;
    padding-left: 1rem;
    margin-right: 0.625rem;
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

export const Address = styled.input`
    border: 0.0625rem solid #bdbdbd ;
    height: 3.25rem;
    width: 61.5625rem;
    margin-top: 1.25rem;
`

export const Youtube  = styled.input`
    border: 0.0625rem solid #bdbdbd ;
    height: 2.8613rem;
    width: 61.5625rem;
`

export const ImageWrapper = styled.div`
    white-space: pre-wrap;
    width: 61.5625rem;
    margin-bottom: 2.5rem;
`

export const ImageUploadButton = styled.button`
    font-family: "NotoSansKR-Regular";
    font-size: 0.875rem;
    color: #4F4F4F;
    height: 4.875rem;
    width: 4.875rem;
    margin-right: 1.5rem;
    border: none;
    cursor: pointer;
`

export const MainOptionWrapper = styled.div`
    width: 61.5625rem;
`

export const MainOption = styled.input`
    margin-right: 0.5rem;
    background-color: #FFD600;
`
export const MainOptionLabel = styled.label`
    margin-right: 0.9375rem;
`

export const ButtonWrapper = styled.div`
    margin-top: 1.875rem;
`

export const SubmitButton = styled.button`
    font-family: "NotoSansKR-Regular";
    background-color: ${(props) => props.isActive === true ? "#FFD600" : ""};
    width: 11.1875rem;
    height: 3.25rem;
    border: none;
    cursor: pointer;
`

export const Error = styled.div`
    color: red;
    font-size: 0.875rem;
`