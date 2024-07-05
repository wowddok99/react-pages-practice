import styled from "@emotion/styled";
import { execOnce } from "next/dist/shared/lib/utils";

export const Wrraper = styled.div`
    font-family: "NotoSansKR-Regular";
    width: 1100px;
    height: 1400px;
    border: 1px solid black;
    margin: 100px;
    padding-top: 90px;
    padding-bottom: 100px;
    padding-left: 100px;
    padding-right: 100px;
    display: flex;
    flex-direction: column;
    border: none;
    box-shadow: 0px 0px 10px gray;
`

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const InfoImageProfile = styled.img`
  margin-right: 10px;
  width: 46.67px;
  height: 46.67px;
  cursor: pointer;
`

export const InfoImage = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
`

export const Line = styled.div`
  border-top: 1px solid #BDBDBD;
  margin-top: 10px;
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  margin-right: 890px;
`

export const Writer = styled.div`
  font-size: 24px;
`

export const CreateAt = styled.div`
  font-size: 16px;
`

export const PostWrapper = styled.div`
  word-break: break-all;
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  margin-bottom: 100px;
  /* 게시글 중앙정렬 */
  /* align-self: center; */
`

export const Title = styled.div`
  font-size: 36px;
  margin-bottom: 25px;
`

export const Image = styled.div`
  background-color: #F2F2F2;
  width: 1100px;
  height: 600px;
  margin-bottom: 25px;
`
export const Contents = styled.div`
  margin-bottom: 100px;
`

export const Youtube = styled.div`
  background-color: #F2F2F2;
  width: 486px;
  height: 240px;
  align-self: center;
`

export const LikeFunctionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
`
export const LikeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`

export const HateWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const LikeButton = styled.img`
  width: 24px;
  height: 24px;
`

export const HateButton = styled.img`
  width: 24px;
  height: 24px;
`
