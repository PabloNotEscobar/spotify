'use client'
import React, {useRef} from 'react';

interface FileUploadProps {
    setFile: (e: File | null) => void;
    accept: string;
}

const FileUpload: React.FC<FileUploadProps> = ({setFile, accept}) => {
    const ref = useRef<HTMLInputElement | null>(null)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files)
        setFile(e.target.files[0])
    }

    return (
        <div>

        </div>
    );
};

export default FileUpload;