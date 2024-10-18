import React from 'react';
type Props = {
    onFileLoad: (input: File) => void;
    id?: string;
    buttonText?: string;
    accept?: string;
};
export declare const FileUploadButton: (props: Props) => React.JSX.Element;
export {};
