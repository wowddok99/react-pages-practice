import BoardWriterUI from './BoardWrite.presenter'
import { ChangeEvent, useEffect, useRef, useState } from 'react' 
import { useRouter } from 'next/router'
import { ApolloError, useMutation } from "@apollo/client"
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from './BoardWrite.queries'
import { BoardWriteProps, CreateBoardInput, UpdateBoardInput, UploadFile } from './BoardWrite.type'
import { Address } from 'react-daum-postcode'
import { checkValidationImageFile } from '../../commons/libraries/validationFile'

export default function BoardWriter(props:BoardWriteProps){
    const router = useRouter();

    // 1. State Variables
    const [isActive, setIsActive] = useState(false);
    const [writer, setWriter] = useState<undefined|string>();
    const [password, setPassword] = useState<undefined|string>();
    const [title, setTitle] = useState<undefined|string>();
    const [contents, setContents] = useState<undefined|string>();
    const [youtubeUrl, setYoutubeUrl] = useState<undefined|string>();
    const [zipcode, setZipcode] = useState<undefined|string>();
    const [address, setAddress] = useState<undefined|string>();
    const [addressDetail, setAddressDetail] = useState<undefined|string>();
    const [writerError, setWriterError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");
    const [titleError, setTitleError] = useState<string>("");
    const [contentsError, setContentsError] = useState<string>("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [imageFileUrls, setImageFileUrls] = useState<string[]>([]);
    const [imageFileNames, setImageFileNames] = useState<string[]>([]);
    const imageFileRef = useRef<HTMLInputElement>(null);

    // isEdit(true) - Data Setting
    useEffect(() => {
        if (props.isEdit) {
            setWriter(props.fetchBoardData?.fetchBoard.writer);
            setTitle(props.fetchBoardData?.fetchBoard.title);
            setContents(props.fetchBoardData?.fetchBoard.contents);
            setYoutubeUrl(props.fetchBoardData?.fetchBoard.youtubeUrl);
            setZipcode(props.fetchBoardData?.fetchBoard.boardAddress?.zipcode);
            setAddress(props.fetchBoardData?.fetchBoard.boardAddress?.address);
            setAddressDetail(props.fetchBoardData?.fetchBoard.boardAddress?.addressDetail);
            
            const imageUrls = props.fetchBoardData?.fetchBoard.images as string[];

            if (imageUrls) {
                const fileNames = [] as string[];

                imageUrls.forEach((el, index) => {
                    fileNames.push(imageUrls[index].split('/').pop() as string)
                })

                setImageFileNames(fileNames);
                setImageFileUrls(imageUrls);
            }
        }
    }, [props.isEdit, props.fetchBoardData]);
    // 2. GraphQL Mutations
    const [createBoard] = useMutation(CREATE_BOARD);
    const [updateBoard] = useMutation(UPDATE_BOARD);
    const [uploadFile] = useMutation<UploadFile>(UPLOAD_FILE)

    // 3. Event Handlers (Click Handlers)
    const onClickSubmit = async () => {
        // writer에 값이 없으면 WriterError에 에러원인 저장
        if(!writer){
            setWriterError("작성자를 입력해주세요.");
        }
        if (!password) {
            setPasswordError("비밀번호를 입력해주세요.");
        }
        if (!title) {
            setTitleError("제목을 입력해주세요.");
        }
        if (!contents) {
            setContentsError("내용을 입력해주세요.");
        }
        
        const createBoardInput: CreateBoardInput = {};
        
        createBoardInput.writer = writer;
        createBoardInput.password = password;
        createBoardInput.title = title;
        createBoardInput.contents = contents;
        createBoardInput.youtubeUrl = youtubeUrl;
        createBoardInput.boardAddress = {
            zipcode: zipcode,
            address: address,
            addressDetail: addressDetail
        }
        createBoardInput.images = [...imageFileUrls]

        // 전부 값이 들어있으면 게시글 등록 alert 
        if (writer && password && title && contents) {
            try {
                const result = await createBoard({
                    variables: {
                        createBoardInput: createBoardInput
                    }
                });
                router.push(`/boards/detail/${result.data.createBoard._id}`);    
            } catch (error) {
                if (error instanceof ApolloError) {
                    alert(error.message);
                }
            }
        }
    }
    
    const onClickUpdate = async () => {
        if (!password) {
            alert("비밀번호를 입력해주세요.");
            return;
        }

        const updateBoardInput: UpdateBoardInput = {};
        
        updateBoardInput.title = title;
        updateBoardInput.contents = contents;
        updateBoardInput.youtubeUrl = youtubeUrl;
        updateBoardInput.boardAddress = {
            zipcode: zipcode,
            address: address,
            addressDetail: addressDetail
        }
        updateBoardInput.images = [...imageFileUrls]

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
            if (error instanceof ApolloError) {
                alert(error.message);
            }
        }
    }

    // 4. Event Handlers (Input Handlers)
    const onInputWriter = (event: ChangeEvent<HTMLInputElement>) => {
        setWriter(event.target.value);
        // 값 입력시 error 초기화
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
  
    const onInputTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);

        if(event.target.value !== ""){
            setTitleError("");
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

    const onInputYoutubeUrl = (event: ChangeEvent<HTMLInputElement>) => {
        setYoutubeUrl(event.target.value);
    }
    
    const onInputAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
        setAddressDetail(event.target.value);
    }

    const onChangeImageFile = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
        // 같은 파일이 선택될 경우 onChange 이벤트가 발생하지 않으므로, 입력값을 초기화
        event.target.value = "";

        const newImageFileUrls = [...imageFileUrls]
        const newImageFileNames = [...imageFileNames]

        if (newImageFileUrls.length >= 3) {
            alert("이미지는 최대 3개까지만 등록할 수 있습니다.");
            return;
        }

        const file = event.target.files?.[0]; // 배열로 들어오는 이유: <input type="file" multiple /> 일 때, 여러개 드래그 가능
        
        // isValid가 false이면 return 실행
        const isImageFileValid = checkValidationImageFile(file);
        if (!isImageFileValid) return;

        // image 파일 storage.googleapis에 업로드
        const result = await uploadFile({ variables: { file: file } })

        //newImageFileNames(배열)에 file의 name(파일명)을 저장
        newImageFileNames.push(`${file?.name}`)
        // newImageFileUrls(배열)에 upLoadFile의 result에서 받아온 url 저장 
        newImageFileUrls.push(`${result.data?.uploadFile.url}`)

        // 각 state에 배열 형태로 저장
        setImageFileNames(newImageFileNames)
        setImageFileUrls(newImageFileUrls)
    }

    // 5. Helper Function
    const onToggleModal = (): void => {
        setIsModalOpen((prev) => !prev);
    };

    const onCompleteDaumPostcode = (data: Address): void => {
        setZipcode(data.zonecode);
        setAddress(data.address);
        onToggleModal();
    }
    
    const onOpenHiddenImageFileInput = () => {
        imageFileRef.current?.click();
    }
    
    const onClickDeleteImageFile = (index: number): void => {
        const newImageFileUrls = [...imageFileUrls]
        const newImageFileNames = [...imageFileNames]

        newImageFileUrls.splice(index, 1)
        newImageFileNames.splice(index, 1)

        setImageFileUrls(newImageFileUrls)
        setImageFileNames(newImageFileNames);
    }

    return (
        <div>
            <BoardWriterUI
            fetchBoardData={props.fetchBoardData}
            writerError={writerError}
            passwordError={passwordError}
            titleError={titleError}
            contentsError={contentsError}

            writer={writer}
            title={title}
            contents={contents}
            youtubeUrl={youtubeUrl}
            imageFileUrls={imageFileUrls}
            imageFileNames={imageFileNames}
            imageFileRef={imageFileRef}

            zipcode={zipcode}
            address={address}
            addressDetail={addressDetail}

            isActive={isActive}
            isEdit={props.isEdit}
            isModalOpen={isModalOpen}

            onClickSubmit={onClickSubmit}
            onClickUpdate={onClickUpdate}

            onInputWriter={onInputWriter}
            onInputPassword={onInputPassword}
            onInputTitle={onInputTitle}
            onInputContents={onInputContents}
            onInputYoutubeUrl={onInputYoutubeUrl}
            onInputAddressDetail={onInputAddressDetail}
            onChangeImageFile={onChangeImageFile}

            onToggleModal={onToggleModal}
            onCompleteDaumPostcode={onCompleteDaumPostcode}
            onOpenHiddenImageFileInput={onOpenHiddenImageFileInput}
            onClickDeleteImageFile={onClickDeleteImageFile}
            />
        </div>
    )
}