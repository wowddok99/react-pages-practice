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
    SearchButton
    
} from "./BoardWrite.styles"

export default function BoardWirteUI(props) {
    return (
        <PageLayout>
            <MainWrapper>
                <CardWrapper>
                    <CardHeaderWrapper>
                        <Title>게시글 등록</Title>
                    </CardHeaderWrapper>
                    <CardMainWrapper>
                        <WriterPasswordWrapper>
                            <InputWrapper>
                                <Label>작성자</Label>
                                <Writer type ="text" placeholder="이름을 입력해주세요."></Writer>
                            </InputWrapper>
                            <InputWrapper>
                                <Label>패스워드</Label>
                                <Password type="Password" placeholder ="패스워드를 입력해주세요."></Password>
                            </InputWrapper>
                        </WriterPasswordWrapper>
                        <SubjectWrapper>
                            <Label>제목</Label>
                            <Subject type="text" placeholder="제목을 입력해주세요."></Subject>
                        </SubjectWrapper>
                        <ContentWrapper>
                            <Label>내용</Label>
                            <Content type="text" placeholder="내용을 입력해주세요."></Content>
                        </ContentWrapper>
                        <AddressWrapper>
                            <ZipcodeWrapper>
                                <ZipCode></ZipCode>
                                <SearchButton>우편번호 검색</SearchButton>
                            </ZipcodeWrapper>
                        </AddressWrapper>
                    </CardMainWrapper>
                </CardWrapper>
            </MainWrapper>
        </PageLayout>
    )
}