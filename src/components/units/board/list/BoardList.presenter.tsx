import { 
    PageLayout,
    MainWrapper,
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

import { BoardListUIProps, FetchBoard } from "./BoardList.type"
export default function BoardListUI(props: BoardListUIProps){
    return (
        <PageLayout>
            <MainWrapper>
                <SearchWrapper>
                    <SearchInputWrapper>
                        <SearchIcon></SearchIcon>
                        <SearchInput type="text" onInput={props.onInputSearchTitle} placeholder="제목을 검색해주세요."></SearchInput>
                    </SearchInputWrapper>
                    <DateInput type="text" onInput={props.onInputStartDate} placeholder="YYYY-MM-DD"></DateInput>
                    ~
                    <DateInput type="text" onInput={props.onInputEndDate} placeholder="YYYY-MM-DD"></DateInput>
                    <SearchButton onClick={props.onClickSearchByTitleAndDate}>검색하기</SearchButton>
                </SearchWrapper>
                <TableWrapper>
                    <TableTop/>
                    <Row>
                        <ColumnHeaderId>번호</ColumnHeaderId>
                        <ColumnHeaderTitle>제목</ColumnHeaderTitle>
                        <ColumnHeaderWriter>작성자</ColumnHeaderWriter>
                        <ColumnHeaderDate>날짜</ColumnHeaderDate>
                    </Row>
                    {props.fetchBoardsData?.fetchBoards.map((el: FetchBoard) => (
                        <Row key={el._id} onClick={(event) => props.onClickMoveToDetailPage(el)}>
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
                        <NavigateBeforeIcon onClick={props.onClickMoveToPreviousPage} />
                            <div>{props.pageNumber}</div>
                        <NavigateNextIcon onClick={props.onClickMoveToNextPage}/>
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