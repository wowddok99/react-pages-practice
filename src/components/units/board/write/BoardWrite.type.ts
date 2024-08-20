import { ChangeEvent, MouseEvent } from "react";

// types - BoardWrite.container
export interface FetchBoard{
    writer: string;
    title: string
    contents: string;
    createdAt: string;
}

export interface FetchBoardData{
    fetchBoard: FetchBoard;
}

export interface UpdateBoardInput{
    writer?: string;
    password?: string;
    title?: string;
    contents? : string;
}

// types - BoardWrite.presenter
export interface BoardWriterProps{
  isEdit: boolean;
  fetchBoardData?: FetchBoardData;
}

export interface BoardWriterUIProps{
    fetchBoardData?: FetchBoardData;
    writerError: string;
    passwordError: string;
    titleError: string;
    contentsError: string;
    isActive: boolean;
    isEdit: boolean;
    
    onInputWriter: (event: ChangeEvent<HTMLInputElement>) => void;
    onInputPassword: (event: ChangeEvent<HTMLInputElement>) => void;
    onInputSubject: (event: ChangeEvent<HTMLInputElement>) => void;
    onInputContents: (event: ChangeEvent<HTMLInputElement>) => void;
    onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
    onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
}