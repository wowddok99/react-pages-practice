import { BoardWriteUIProps } from "./BoardWrite.type"
import {
    PageLayout,
    MainWrapper,
    CardWrapper,
    CardHeaderWrapper,
    CardMainWrapper,
    CardFooterWrapper,
    Title,
    WriterPasswordWrapper,
    InputWrapper,
    Label,
    Writer,
    Password,
    SubjectWrapper,
    Subject,
    ContentWrapper,
    Content,
    AddressWrapper,
    ZipcodeWrapper,
    ZipCode,
    SearchButton,
    Address,
    YoutubeWrapper,
    Youtube,
    ImageUploadWrapper,
    ImageUploadButtonWrapper,
    ImageUploadButton,
    MainOptionWrapper,
    MainOptionRadioWrapper,
    MainOptionRadioButton,
    SubmitButtonWrapper,
    SubmitButton,
    Error
    
} from "./BoardWrite.styles"
import { Modal } from "antd"
import DaumPostcodeEmbed from "react-daum-postcode"

export default function BoardWriterUI(props: BoardWriteUIProps) {
    return (
        <PageLayout>
            <MainWrapper>
                <CardWrapper>
                    <CardHeaderWrapper>
                        <Title>{props.isEdit ? "게시글 수정" : "게시글 등록"}</Title>
                    </CardHeaderWrapper>
                    <CardMainWrapper>
                        <WriterPasswordWrapper>
                            <InputWrapper>
                                <Label>작성자</Label>
                                <Writer type ="text" placeholder="이름을 입력해주세요." onInput={props.onInputWriter} value={props.writer} disabled={props.isEdit ? true : false}></Writer>
                                <Error>{props.writerError}</Error>
                            </InputWrapper>
                            <InputWrapper>
                                <Label>패스워드</Label>
                                <Password type="Password" placeholder ="패스워드를 입력해주세요." onInput={props.onInputPassword}></Password>
                                <Error>{props.passwordError}</Error>
                            </InputWrapper>
                        </WriterPasswordWrapper>
                        <SubjectWrapper>
                            <Label>제목</Label>
                            <Subject type="text" placeholder="제목을 입력해주세요." onInput={props.onInputTitle} value={props.title}></Subject>
                            <Error>{props.titleError}</Error>
                        </SubjectWrapper>
                        <ContentWrapper>
                            <Label>내용</Label>
                            <Content type="text" placeholder="내용을 입력해주세요." onInput={props.onInputContents} value={props.contents}></Content>
                            <Error>{props.contentsError}</Error>
                        </ContentWrapper>
                        <AddressWrapper>
                            {props.isModalOpen && (
                                <Modal title="주소 검색" open={true} onOk={props.onToggleModal} onCancel={props.onToggleModal} cancelText={"취소"} okText={"확인"}>
                                    <DaumPostcodeEmbed onComplete={props.onCompleteDaumPostcode}/>
                                </Modal>
                            )}                            
                            <ZipcodeWrapper>
                                <ZipCode placeholder={"우편번호"} disabled={true} value={props.zipcode}></ZipCode>
                                <SearchButton onClick={props.onToggleModal}>우편번호 검색</SearchButton>
                            </ZipcodeWrapper>
                            <Address placeholder={"주소를 입력해주세요."} disabled={true} value={props.address}></Address>
                            <Address placeholder={"상세주소를 입력해주세요."} readOnly={!(props.zipcode && props.address)} onInput={props.onInputAddressDetail} value={props.addressDetail}></Address>
                        </AddressWrapper>
                        <YoutubeWrapper>
                            <Label>유튜브</Label>
                            <Youtube type="text" placeholder="유튜브 영상 URL을 입력해주세요." onInput={props.onInputYoutubeUrl} value={props.youtubeUrl}></Youtube>
                        </YoutubeWrapper>
                        {/* <ImageUploadWrapper>
                            <Label>사진 첨부</Label>
                            <ImageUploadButtonWrapper>
                                <ImageUploadButton>+<br/>upload</ImageUploadButton>
                                <ImageUploadButton>+<br/>upload</ImageUploadButton>
                                <ImageUploadButton>+<br/>upload</ImageUploadButton>
                            </ImageUploadButtonWrapper>
                        </ImageUploadWrapper> */}
                        {/* <MainOptionWrapper>
                            <MainOptionRadioWrapper>
                                <MainOptionRadioButton type="radio" name="MainOption" id="youtube"></MainOptionRadioButton>
                                <label>유튜브</label>
                            </MainOptionRadioWrapper>
                            <MainOptionRadioWrapper>
                                <MainOptionRadioButton type="radio" name="MainOption" id="image"></MainOptionRadioButton>
                                <label>사진</label>
                            </MainOptionRadioWrapper>
                        </MainOptionWrapper> */}
                        <SubmitButtonWrapper>
                            <SubmitButton
                            onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit} 
                            isActive = {props.isEdit ? true : props.isActive}>
                                {props.isEdit ? "수정하기" : "등록하기"}
                            </SubmitButton>
                        </SubmitButtonWrapper>
                    </CardMainWrapper>
                </CardWrapper>
            </MainWrapper>
        </PageLayout>
    )
}