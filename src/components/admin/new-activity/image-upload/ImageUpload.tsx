import React, { useState } from 'react';
import '../content/AddActivity-content.css'

interface Props {}

const ImageUpload: React.FC<Props> = () => {
    const [files, setFiles] = useState<File[]>([]);
    const [previewUrls, setPreviewUrls] = useState<string[]>([]);
    const [isValid, setIsValid] = useState<boolean>(true);

    const fileChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files;
        if(!selectedFiles) return;

        // @ts-ignore
        setFiles([...files, ...selectedFiles]);
        setIsValid(true);

        for (let i = 0; i < selectedFiles.length; i++) {
            setPreviewUrls([...previewUrls, URL.createObjectURL(selectedFiles[i])])
        }
    };

    return (
        <div>
            <form>
                <input type="file" multiple onChange={fileChangeHandler} />
                {previewUrls.map((url, index) => (
                    <img key={index} src={url} className={"previewImg"} alt="Preview" style={{margin: '10px'}}/>
                ))}
                {!isValid && <p>Odaberite 2 fotografije za vašu aktivnost</p>}
            </form>
        </div>
    );
}

export default ImageUpload;
