import { gql } from "@apollo/client"

export const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
        fetchBoard(boardId:$boardId){
            _id
            writer
            title
            contents
            createdAt
            likeCount
            dislikeCount
            youtubeUrl
            boardAddress {
                _id
                zipcode
                address
                addressDetail
            }
            images
        }
    }
`

export const DELETE_BOARD = gql`
    mutation deleteBoard($boardId: ID!){
        deleteBoard(boardId:$boardId)
    }
`

export const LIKE_BOARD = gql`
    mutation likeBoard($boardId: ID!){
        likeBoard(boardId:$boardId)
    }
`

export const DISLIKE_BOARD = gql`
    mutation dislikeBoard($boardId: ID!){
        dislikeBoard(boardId:$boardId)
    }
`
