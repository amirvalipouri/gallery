

import {  get  } from "react-hook-form";
import FileUploader from "./index";

const FileInput = ({
    name,
    register,
    rules,
    errors,
    variant,
    ...rest
}) => {
    const error = get(errors, name);
    const hasError = !!error;
    return (
        <>
            <FileUploader
                {...register(name, rules)}
                {...rest}
            />
            {
                hasError && (
                    <p className="mt-1 text-sm text-error">
                        {error.message}
                    </p>
                )
            }
        </>
    );
};

export default FileInput;