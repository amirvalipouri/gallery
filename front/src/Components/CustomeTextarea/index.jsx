import { Input } from "antd";
const { TextArea } = Input;
import { Controller } from "react-hook-form";

const CustomTextarea = ({ label,
    placeholder = 'Enter Response',
    ...rest
}) => {
    return (
        <div className="input-container">
            <p className="my-2">{label}</p>
            <Controller
                name={rest.name}
                control={rest.control}
                rules={rest.rules}
                render={({ field, fieldState }) => (
                    <TextArea
                        {...field}
                        placeholder={placeholder}
                        className={
                            fieldState.invalid ? 'custom-input error ' : 'custom-input '
                        }
                    />
                )}
            />
            {/* {errors.username && (
                <p className='error-message'>{errors.username.message}</p>
            )} */}
        </div>
    );
};
export default CustomTextarea