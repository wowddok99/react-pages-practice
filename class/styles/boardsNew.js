import styled from "@emotion/styled";
export const Wrraper = styled.div`
    font-family: "NotoSansKR-Regular";
    width: 1100px;
    border: 1px solid black;
    margin: 100px;
    padding-top: 90px;
    padding-bottom: 100px;
    padding-left: 100px;
    padding-right: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    box-shadow: 0px 0px 10px gray;
`

export const Title = styled.div`
    margin-bottom: 50px;
    font-family: "NotoSansKR-Regular";
    font-size: 34px;
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
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
`

export const Label = styled.div`
    margin-bottom: 10px;
`

export const Writer = styled.input`
    width: 486px;
    height: 52px;
    border: 1px solid #bdbdbd;
    margin-right: 10px;

    ::placeholder{
        font-family: "NotoSansKR-Regular";
    }
`

export const Password = styled.input`
    width : 486px;
    height: 52px;
    border: 1px solid #bdbdbd;

    ::placeholder{
        font-family: "NotoSansKR-Regular";
    }
`

export const Subject = styled.input`
    width : 985px;
    height: 52px;
    border: 1px solid #bdbdbd;
`

export const Content = styled.input`
    width : 985px;
    height: 520px;
    border: 1px solid #bdbdbd;

    ::placeholder{
        font-family: "NotoSansKR-Regular";
    }
`

export const HouseCodeWrapper = styled.div`
    width: 985px;
    display: flex;
    flex-direction: row;
`

export const HouseCode = styled.input`
    border: 1px solid #bdbdbd;
    height: 52px;
    width: 77px;
    padding-left: 16px;
    margin-right: 10px;
`

export const SearchButton = styled.button`
    font-family: "NotoSansKR-Regular";
    background-color: black;
    border: 1px solid #bdbdbd;
    width: 124px;
    height: 56px;
    cursor: pointer;
    color: white;
`

export const Address = styled.input`
    border: 1px solid #bdbdbd ;
    height: 52px;
    width: 985px;
    margin-top: 20px;
`

export const Youtube  = styled.input`
    border: 1px solid #bdbdbd ;
    height: 45.78px;
    width: 985px;
`

export const ImageWrapper = styled.div`
    white-space: pre-wrap;
    width: 985px;
    margin-bottom: 40px;
`

export const ImageUploadButton = styled.button`
    font-family: "NotoSansKR-Regular";
    font-size: 14px;
    color: #4F4F4F;
    height: 78px;
    width: 78px;
    margin-right: 24px;
    border: none;
    cursor: pointer;
`

export const MainOptionWrapper = styled.div`
    width: 985px;
`

export const MainOption = styled.input`
    margin-right: 8px;
    background-color: #FFD600;
`
export const MainOptionLabel = styled.label`
    margin-right: 15px;
`

export const ButtonWrapper = styled.div`
    margin-top: 30px;
`

export const SubmitButton = styled.button`
    font-family: "NotoSansKR-Regular";
    background-color: #FFD600;
    width: 179px;
    height: 52px;
    border: none;
    cursor: pointer;
`

export const Error = styled.div`
    color: red;
    font-size: 14px;
`