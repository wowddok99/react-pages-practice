import { Address } from 'react-daum-postcode';
import { Youtube } from './BoardWrite.styles';
import { ChangeEvent, MouseEvent, RefObject } from "react";

// types - BoardWrite.container
export interface FetchBoard{
    writer: string;
    title: string
    contents: string;
    createdAt: string;
    youtubeUrl: string;
    boardAddress: {
        _id: string;
        zipcode: string;
        address: string;
        addressDetail: string;
    }
    images: [undefined | string]
}

export interface FetchBoardData{
    fetchBoard: FetchBoard;
}

export interface UpdateBoardInput{
    password?: string;
    title?: string;
    contents?: string;
    youtubeUrl?: string;
    boardAddress?: {
        zipcode?: string;
        address?: string;
        addressDetail?: string;
    }
    images?: [undefined | string];
}

export interface CreateBoardInput{
    writer?: string;
    password?: string;
    title?: string;
    contents?: string;
    youtubeUrl?: string;
    boardAddress?: {
        zipcode?: string;
        address?: string;
        addressDetail?: string;
    }
    images?: [undefined | string];
}

export interface UploadFile {
    uploadFile: {
        url: string
    }
}

// types - BoardWrite.presenter
export interface BoardWriteProps{
  isEdit: boolean;
  fetchBoardData?: FetchBoardData;
}

export interface BoardWriteUIProps{
    fetchBoardData?: FetchBoardData;
    writerError: string;
    passwordError: string;
    titleError: string;
    contentsError: string;
    isActive: boolean;
    isEdit: boolean;
    isModalOpen: boolean;

    writer: string | undefined;
    title: string | undefined;
    contents: string | undefined;
    youtubeUrl: string | undefined;
    imageFileUrl: string | undefined;
    imageFileName: string | undefined;
    imageFileRef: RefObject<HTMLInputElement>

    zipcode: string | undefined;
    address: string | undefined;
    addressDetail: string | undefined;
    
    onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
    onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;

    onInputWriter: (event: ChangeEvent<HTMLInputElement>) => void;
    onInputPassword: (event: ChangeEvent<HTMLInputElement>) => void;
    onInputTitle: (event: ChangeEvent<HTMLInputElement>) => void;
    onInputContents: (event: ChangeEvent<HTMLInputElement>) => void;
    onInputYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
    onInputAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeImageFile: (event: ChangeEvent<HTMLInputElement>) => void;

    onToggleModal: () => void;
    onCompleteDaumPostcode: (data: Address) => void;
    onOpenHiddenImageFileInput: () => void;
    onClickDeleteImageFile: () => void;
}