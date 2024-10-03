import Pagination from "../../commons/pagination/Pagination.container"
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
                        <SearchInput type="text" onInput={props.onInputSearchTitle} value={props.searchTitle} placeholder="제목을 검색해주세요."></SearchInput>
                    </SearchInputWrapper>
                    <DateInput type="date" onInput={props.onInputStartDate} value={props.startDate} placeholder="YYYY-MM-DD" max={"9999-12-31"}></DateInput>
                    ~
                    <DateInput type="date" onInput={props.onInputEndDate} value={props.endDate} placeholder="YYYY-MM-DD" max={"9999-12-31"}></DateInput>
                    <SearchButton onClick={props.onClickSearchByTitleAndDate}>검색하기</SearchButton>
                </SearchWrapper>
                <TableWrapper>
                    <TableTop/>
                    <Row>
                        <ColumnHeaderId>ID</ColumnHeaderId>
                        <ColumnHeaderTitle>제목</ColumnHeaderTitle>
                        <ColumnHeaderWriter>작성자</ColumnHeaderWriter>
                        <ColumnHeaderDate>날짜</ColumnHeaderDate>
                    </Row>
                    {props.fetchBoardsData?.fetchBoards.map((el: FetchBoard) => (
                        <Row key={el._id} onClick={(event) => props.onClickMoveToDetailPage(el)}>
                            <ColumnId>{String(el._id).slice(-4).toUpperCase()}</ColumnId>
                            <ColumnTitle>{el.title}</ColumnTitle>
                            <ColumnWriter>{el.writer}</ColumnWriter>
                            <ColumnDate>{(el.createdAt).substring(0,10)}</ColumnDate>
                        </Row> 
                    ))}
                    <TableBottom/>
                </TableWrapper>
                <FooterWrapper>
                    <DummyWrapper/>
                    <Pagination key={props.paginationKey} fetchBoardsCountData={props.fetchBoardsCountData} refetch={props.refetch} />
                    <SubmitButtonWrapper>
                        <PencilIcon/>
                        <SubmitButton onClick={props.onClickMoveToWritePage}>등록하기</SubmitButton>
                    </SubmitButtonWrapper>
                </FooterWrapper>
            </MainWrapper>
        </PageLayout>
    )
}