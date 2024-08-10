import BoardWriterUI from './BoardWrite.presenter'
import { ChangeEvent, useState } from 'react' 
import { useRouter } from 'next/router'
import { useMutation } from "@apollo/client"
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries'
import GraphQLRequestError from '../../../../commons/errors/GraphQLRequestError'
import { BoardWriterProps, updateBoardInput } from './BoardWrite.type'

export default function BoardWriter(props:BoardWriterProps){
    
    const [isActive, setIsActive] = useState(false);

    const [writer, setWriter] = useState<undefined|string>();
    const [password, setPassword] = useState<undefined|string>();
    const [title, setTitle] = useState<undefined|string>();
    const [contents, setContents] = useState<undefined|string>();

    const [writerError, setWriterError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [subjectError, setSubjectError] = useState("");
    const [contentsError, setContentsError] = useState("");

    const router = useRouter();
    const [createBoard] = useMutation(CREATE_BOARD);
    const [updateBoard] = useMutation(UPDATE_BOARD);


    // writer input의 입력 감지 -> state에 저장
    const onInputWriter = (event: ChangeEvent<HTMLInputElement>) => {
        setWriter(event.target.value);
        // console.log(writer)
        // 값 입력시 error창 초기화
        if(event.target.value !== ""){
          setWriterError("");
        }

        if (event.target.value && password && title && contents) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }
  
    const onInputPassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);

        if(event.target.value !== ""){
        setPasswordError("");
        }

        if (writer && event.target.value && title && contents) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }
  
    const onInputSubject = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);

        if(event.target.value !== ""){
            setSubjectError("");
        }

        if (writer && password && event.target.value && contents) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }
  
    const onInputContents = (event: ChangeEvent<HTMLInputElement>) => {
        setContents(event.target.value);
        
        if(event.target.value !== ""){
            setContentsError("");
        }

        if (writer && password && title && event.target.value) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }

    const onClickSubmit = async () => {
        // writer에 값이 없으면 WriterError에 에러원인 저장
        if(!writer){
            setWriterError("작성자를 입력해주세요.");
        }
        if (!password) {
            setPasswordError("비밀번호를 입력해주세요.");
        }
        if (!title) {
            setSubjectError("제목을 입력해주세요.");
        }
        if (!contents) {
            setContentsError("내용을 입력해주세요.");
        }

        // 전부 값이 들어있으면 게시글 등록 alert 
        if (writer && password && title && contents) {
            try {
                const result = await createBoard({
                    variables: {
                        createBoardInput: {
                            writer: writer,
                            password: password,
                            title: title,
                            contents : contents
                        }
                    }
                });
                router.push(`/boards/detail/${result.data.createBoard._id}`);    
            } catch (error) {
                if (error instanceof GraphQLRequestError) {
                    console.log(error.message);
                }
            }
        }
    }
  
    const onClickUpdate = async () => {
        if (!password) {
            alert("비밀번호를 입력해주세요.");
            return;
        }

        const updateBoardInput: updateBoardInput = {};

        // undefined : 사용자가 데이터를 안건드린 경우
        // "" : 사용자가 데이터를 지운 경우
        if (title === undefined){
            updateBoardInput.title = props.fetchBoardData?.fetchBoard.title;
        } else if (title === "") {
            updateBoardInput.title = "";
        } else if (title) {
            updateBoardInput.title = title;
        }

        if (contents === undefined){
            updateBoardInput.contents = props.fetchBoardData?.fetchBoard.contents;
        } else if (contents === "") {
            updateBoardInput.contents = "";
        } else if (contents) {
            updateBoardInput.contents = contents;
        }
        
        try {
            const result = await updateBoard({
                variables: {
                    boardId: router.query.boardId,
                    password,
                    updateBoardInput
                }
            })
            router.push(`/boards/detail/${result.data.updateBoard._id}`)
        } catch(error) {
            if (error instanceof GraphQLRequestError) {
                alert(error.message);
            }
        }
    }
    
    return (
        <div>
            <BoardWriterUI
            fetchBoardData={props.fetchBoardData}
            writerError={writerError}
            passwordError={passwordError}
            titleError={subjectError}
            contentsError={contentsError}
            isActive={isActive}
            isEdit={props.isEdit}
            onInputWriter={onInputWriter}
            onInputPassword={onInputPassword}
            onInputSubject={onInputSubject}
            onInputContents={onInputContents}
            onClickSubmit={onClickSubmit}
            onClickUpdate={onClickUpdate}
            />
        </div>
    )
}