import { ChangeEvent, MouseEvent } from "react";

export interface BoardWriterProps{
    isEdit: boolean
    fetchBoardData?: {
        fetchBoard: {
          writer: string;
          title: string
          contents: string;
          createdAt: string
      }
    }
  }
  
export interface UpdateBoardInput{
    writer?: string;
    password?: string;
    title?: string;
    contents? : string;
}

export interface BoardWriterUIProps{
    fetchBoardData?: {
        fetchBoard: {
          writer: string;
          title: string
          contents: string;
          createdAt: string
      }
    }
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