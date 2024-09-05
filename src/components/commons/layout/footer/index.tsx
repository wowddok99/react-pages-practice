import styled from "@emotion/styled"

const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 40px;
    height: 200px;
    border: 2px solid whitesmoke;
`

const FooterTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #999999;
`
const FooterContent = styled.div`
    font-size: 18px;
    color: #bfbfbf;
`

export default function LayOutFooter(){
    return (
        <FooterWrapper>
            <FooterContent>© 2024 CodeConvo Company. All rights reserved.</FooterContent>
        </FooterWrapper>
    )
}