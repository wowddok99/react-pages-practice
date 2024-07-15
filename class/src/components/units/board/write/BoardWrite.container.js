import BoardWirteUI from './BoardWrite.presenter'
import { useState } from 'react' 
import { useRouter } from 'next/router'
import { useMutation } from "@apollo/client"
import { CREATE_BOARD } from './BoardWrite.queries'

export default function BoardWirte() {
  const [isActive, setIsActive] = useState(false);

  const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const [writerError, setWriterError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [subjectError, setSubjectError] = useState("");
    const [contentsError, setContentsError] = useState("");

    const router = useRouter();
    const [createBoard] = useMutation(CREATE_BOARD)

    // writer input의 입력 감지 -> state에 저장
    const onChangeWriter = (event) => {
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
    
      const onChangePassword = (event) => {
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
    
      const onChangeSubject = (event) => {
        console.log(event.target.value);
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
    
      const onChangeContents = (event) => {
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

                console.log(result);
                // alert("게시글이 등록되었습니다.\n등록된 게시글 ID는 " + result.data.createBoard._id + " 입니다.");
                router.push(`/boards/detail/${result.data.createBoard._id}`);    
            } catch (error) {
                alert(error);
            }
        }

    }
    
    return (
        <div>
            <BoardWirteUI
            writerError={writerError}
            passwordError={passwordError}
            titleError={subjectError}
            contentsError={contentsError}
            onChangeWriter={onChangeWriter}
            onChangePassword={onChangePassword}
            onChangeTitle={onChangeSubject}
            onChangeContents={onChangeContents}
            onClickSubmit={onClickSubmit}
            isActive={isActive}
            />
        </div>
    )
}