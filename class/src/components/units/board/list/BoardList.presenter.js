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
    DummyWrapper
} from "./BoardList.styles"

export default function BoardListUI(props){
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
                    {props.data?.fetchBoards.map(el => (
                        <Row key={el._id} onClick={props.onClickMoveToDetailPage(el)}>
                            <ColumnId>{el._id}</ColumnId>
                            <ColumnTitle>{el.title}</ColumnTitle>
                            <ColumnWriter>{el.writer}</ColumnWriter>
                            <ColumnDate>{(el.createdAt).substring(0,10)}</ColumnDate>
                        </Row> 
                    ))}
                    <TableBottom/>
                </TableWrapper>
                <FooterWrapper>
                    <DummyWrapper/>
                    <NavigateWrapper>
                        <NavigateBeforeIcon/>
                            <div>{props.pageNumber}</div>
                        <NavigateNextIcon/>
                    </NavigateWrapper>
                    <SubmitButtonWrapper>
                        <PencilIcon/>
                        <SubmitButton onClick={props.onClickMoveToWritePage}>등록하기</SubmitButton>
                    </SubmitButtonWrapper>
                </FooterWrapper>
            </MainWrapper>
        </PageLayout>
    )
}