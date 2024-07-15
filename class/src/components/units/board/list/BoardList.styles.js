import styled from "@emotion/styled";
import { IoIosSearch } from "react-icons/io";

export const PageLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
`

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem;
    width: 78.5rem; // 필요시 %로 width 비율 조절
    /* width: 90%; */
    gap: 2.5rem;
`

export const BestBoardWrapper = styled.div`
`

export const SearchWrapper = styled.div`
    display: flex;
    column-gap: 1rem;
`
export const SearchInputWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`

export const SearchIcon = styled(IoIosSearch)`
    position: absolute;
    margin-left: 10px;
`

export const SearchInput = styled.input`
    background-color: #F2F2F2;
    width: 42rem;
    height: 3.25rem;
    padding-left: 2.5rem;
    border-radius: 0.625rem;
    border: none;
`

export const DateInput = styled.input`
    padding-left: 1.875rem;
    width: 15.25rem;
    height: 3.25rem;
    border: 0.0625rem solid #bdbdbd ;
`

export const SearchButton = styled.button`
    background-color: black;
    color: white;
    width: 5.875rem;
    height: 3.25rem;
    border-radius: 0.625rem;
    border: none;
`

export const TableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 65rem;
`

export const TableTop = styled.div`
    border-top: 0.125rem solid gray;
`

export const TableBottom = styled.div`
    border-bottom: 0.125rem solid gray;
`

export const Row = styled.div`
    display: flex;
    align-items: center;
    height: 3.25rem;
    border-top: 1px solid #bdbdbd;
    border-bottom: 1px solid #bdbdbd;
`

export const ColumnHeaderId = styled.div`
    font-weight: bold;
    width: 10%;
    text-align: center;
`

export const ColumnHeaderTitle = styled.div`
    font-weight: bold;
    width: 70%;
    text-align: center;
`

export const ColumnHeaderWriter = styled.div`
    font-weight: bold;
    width: 20%;
    text-align: center;
`

export const ColumnHeaderDate = styled.div`
    font-weight: bold;
    width: 10%;
    text-align: center;
`

export const ColumnId = styled.div`
    width: 10%;
    text-align: center;
`

export const ColumnTitle = styled.div`
    width: 70%;
    text-align: center;
`

export const ColumnWriter = styled.div`
    width: 20%;
    text-align: center;
`

export const ColumnDate = styled.div`
    width: 10%;
    text-align: center;
`