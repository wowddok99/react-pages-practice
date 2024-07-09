import {
    Title,
    Wrraper,
    WriterPasswordWrapper,
    Label,
    Writer,
    Password,
    InputWrapper,
    Subject,
    Content,
    HouseCode,
    SearchButton,
    HouseCodeWrapper,
    Address,
    Youtube,
    ImageWrapper,
    ImageUploadButton,
    MainOptionWrapper,
    MainOption,
    MainOptionLabel,
    ButtonWrapper,
    SubmitButton,
    Error
} from "../../../../../styles/boardsNew"

export default function BoardWirteUI(props) {
    return (
        <Wrraper>
                <Title>게시글 등록</Title>
                <WriterPasswordWrapper>
                    <InputWrapper>
                        <Label>작성자</Label>
                        <Writer type ="text" placeholder="이름을 적어주세요." onChange={props.onChangeWriter}></Writer>
                        <Error>{props.writerError}</Error>
                    </InputWrapper>
                    <InputWrapper>
                        <Label>패스워드</Label>
                        <Password type="Password" placeholder ="패스워드를 적어주세요." onChange={props.onChangePassword}></Password>
                        <Error>{props.passwordError}</Error>
                    </InputWrapper>
                </WriterPasswordWrapper>
                <InputWrapper>
                        <Label>제목</Label>
                        <Subject type="text" placeholder="제목을 입력해주세요." onChange={props.onChangeTitle}></Subject>
                        <Error>{props.titleError}</Error>
                </InputWrapper>
                <InputWrapper>
                    <Label>내용</Label>
                    <Content type="text" placeholder="내용을 입력해주세요." onChange={props.onChangeContents}></Content>
                    <Error>{props.contentsError}</Error>
                </InputWrapper>
                <InputWrapper>
                    <Label>주소</Label>
                    <HouseCodeWrapper>
                        <HouseCode type="text"></HouseCode>
                        <SearchButton>우편번호 검색</SearchButton>
                    </HouseCodeWrapper>
                    <Address type="text"></Address>
                    <Address></Address>
                </InputWrapper>
                <InputWrapper>
                    <Label>유튜브</Label>
                    <Youtube type="text"></Youtube>
                </InputWrapper>
                <ImageWrapper>
                    <Label>사진 첨부</Label>
                    <ImageUploadButton>+<br/>upload</ImageUploadButton>
                    <ImageUploadButton>+<br/>upload</ImageUploadButton>
                    <ImageUploadButton>+<br/>upload</ImageUploadButton>
                </ImageWrapper>
                <MainOptionWrapper>
                    <Label>메인 설정</Label>
                    <MainOption type="radio" name="MainOption" id="youtube"></MainOption>
                    <MainOptionLabel>유튜브</MainOptionLabel>
                    <MainOption type="radio" name="MainOption" id="image"></MainOption>
                    <MainOptionLabel>사진</MainOptionLabel>
                </MainOptionWrapper>
                <ButtonWrapper>
                    <SubmitButton onClick={props.onClickSubmit}>등록하기</SubmitButton>
                </ButtonWrapper>
            </Wrraper>
    )
}