import { 
    PageLayout,
    MainWrapper,
    BestBoardWrapper,
    SearchWrapper,
    SearchInputWrapper,
    SearchIcon,
    SearchInput,
    DateInput,
    SearchButton,
    TableWrapper,
    TableTop,
    TableBottom,
    Row,
    ColumnHeaderId,
    ColumnHeaderTitle,
    ColumnHeaderWriter,
    ColumnHeaderDate,
    ColumnId,
    ColumnTitle,
    ColumnWriter,
    ColumnDate,
    FooterWrapper,
    NavigateWrapper,
    NavigateBeforeIcon,
    NavigateNextIcon,
    SubmitButtonWrapper,
    SubmitButton,
    PencilIcon,
    TestWrapper

} from "./BoardList.styles"

export default function BoardListUI(){
    return (
        <PageLayout>
            <MainWrapper>
                <SearchWrapper>
                    <SearchInputWrapper>
                        <SearchIcon></SearchIcon>
                        <SearchInput type="text" placeholder="제목을 검색해주세요."></SearchInput>
                    </SearchInputWrapper>
                    <DateInput type="text" placeholder="YYYY. MM.DD ~ YYYY. MM.DD"></DateInput>
                    <SearchButton>검색하기</SearchButton>
                </SearchWrapper>
                <TableWrapper>
                    <TableTop/>
                    <Row>
                        <ColumnHeaderId>번호</ColumnHeaderId>
                        <ColumnHeaderTitle>제목</ColumnHeaderTitle>
                        <ColumnHeaderWriter>작성자</ColumnHeaderWriter>
                        <ColumnHeaderDate>날짜</ColumnHeaderDate>
                    </Row>
                    {[...Array(8)].map((_, index) => (
                        <Row>
                            <ColumnId>{index}</ColumnId>
                            <ColumnTitle>test입니다.</ColumnTitle>
                            <ColumnWriter>전상은</ColumnWriter>
                            <ColumnDate>2024.07.15</ColumnDate>
                        </Row>    
                    ))}
                    <TableBottom/>
                </TableWrapper>
                <FooterWrapper>
                    <NavigateWrapper>
                        <NavigateBeforeIcon/>
                            <div>1</div>
                            <div>2</div>
                        <NavigateNextIcon/>
                    </NavigateWrapper>
                    <SubmitButtonWrapper>
                        <PencilIcon/>
                        <SubmitButton>
                            등록하기
                        </SubmitButton>
                    </SubmitButtonWrapper>
                </FooterWrapper>
            </MainWrapper>
        </PageLayout>
    )
}