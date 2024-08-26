import { Button } from 'antd';
import { forwardRef, useState, useRef } from 'react'
import { RxCross2 } from 'react-icons/rx';

const FileUploader = forwardRef(({
    name = "",
    label = "",
    setValue = () => { },
    ...rest
}, ref) => {
    
    const [fileName, setFileName] = useState("")
    const inputFileRef = useRef()
    const clickInputFile = () => {
        inputFileRef.current?.click();
    };
    return (
        <div className="w-full my-1">
            <p className="text-black text-md font-bold text-right my-2 mr-1">{label}</p>
            <div className="border flex h-10 rounded-md relative" >
                <input value={fileName} ref={ref}  className="border-none outline-none bg-transparent" {...rest} />
                <div className="absolute left-1 mt-1 flex items-center">
                    {fileName?.length > 0 && <span className="mx-1 cursor-pointer" onClick={()=> {setValue(name, "");setFileName("")}}><RxCross2 color='#FF0000' /></span>}
                    <Button size='small' onClick={clickInputFile} type='primary' className="p-4 bg-[#00408726] border-0 text-[#747474] font-bold" >آپلود فایل</Button>
                </div>
            </div>
            <input
                ref={inputFileRef}
                type="file"
                className="hidden"
                onChange={({ target }) => { setValue(name, target.files[0]); setFileName(target?.files[0]?.name) }}
            />
        </div>
    );
});

export default FileUploader