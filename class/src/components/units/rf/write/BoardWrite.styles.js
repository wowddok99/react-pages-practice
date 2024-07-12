import styled from "@emotion/styled";

export const PageLayout = styled.div`
    font-family: "NotoSansKR-Regular";
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;

    /* border: none;
    box-shadow: 0rem 0rem 0.625rem gray; */
`
export const HeaderWarpper = styled.div`
    background-color: yellow;
    width: 100%;
    height: 3rem;
`

export const MainWarpper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5rem;
    width: 100%;
`

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 3rem;
    padding-right: 3rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    border: 0.1rem solid black;
    min-width: 50vh
`