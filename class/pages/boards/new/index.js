import { useEffect, useState } from 'react' 

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
} from "../../../styles/boardsNew"

export default function BoardsNewPage() {
    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const [writerError, setWriterError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [titleError, setTitleError] = useState("");
    const [contentsError, setContentsError] = useState("");

    // writer input의 입력 감지 -> state에 저장
    const onChangeWriter = (event) => {
        setWriter(event.target.value);
        // console.log(writer)
        // 값 입력시 error창 초기화
        if(event.target.value !== ""){
          setWriterError("")
        }
      };
    
      const onChangePassword = (event) => {
        setPassword(event.target.value);
        if(event.target.value !== ""){
          setPasswordError("")
        }
      };
    
      const onChangeTitle = (event) => {
        setTitle(event.target.value);
        if(event.target.value !== ""){
          setTitleError("")
        }
      };
    
      const onChangeContents = (event) => {
        setContents(event.target.value);
        if(event.target.value !== ""){
          setContentsError("")
        }
      };


    const onClickSubmit = () => {
        // writer에 값이 없으면 WriterError에 에러원인 저장
        if(!writer){
            setWriterError("작성자를 입력해주세요.")
        }
        if (!password) {
            setPasswordError("비밀번호를 입력해주세요.");
        }
        if (!title) {
            setTitleError("제목을 입력해주세요.");
        }
        if (!contents) {
            setContentsError("내용을 입력해주세요.");
        }
        console.log(writer)
        console.log(password)
        console.log(title)
        console.log(contents)
        console.log(writerError)

        // 전부 값이 들어있으면 게시글 등록 alert 
        if (writer && password && title && contents) {
            alert("게시글이 등록되었습니다.");
        }
    };

    return (
            <Wrraper>
                <Title>게시글 등록</Title>
                <WriterPasswordWrapper>
                    <InputWrapper>
                        <Label>작성자</Label>
                        <Writer type ="text" placeholder="이름을 적어주세요." onChange={onChangeWriter}></Writer>
                        <Error>{writerError}</Error>
                    </InputWrapper>
                    <InputWrapper>
                        <Label>패스워드</Label>
                        <Password type="Password" placeholder ="패스워드를 적어주세요." onChange={onChangePassword}></Password>
                        <Error>{passwordError}</Error>
                    </InputWrapper>
                </WriterPasswordWrapper>
                <InputWrapper>
                        <Label>제목</Label>
                        <Subject type="text" placeholder="제목을 입력해주세요." onChange={onChangeTitle}></Subject>
                        <Error>{titleError}</Error>
                </InputWrapper>
                <InputWrapper>
                    <Label>내용</Label>
                    <Content type="text" placeholder="내용을 입력해주세요." onChange={onChangeContents}></Content>
                    <Error>{contentsError}</Error>
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
                    <SubmitButton onClick={onClickSubmit}>등록하기</SubmitButton>
                </ButtonWrapper>
            </Wrraper>
    )
}