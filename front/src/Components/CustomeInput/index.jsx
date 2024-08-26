import { Input } from "antd";
import { Controller } from "react-hook-form";

const CustomInput = ({ label,
    type = 'text',
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
                    <Input
                        {...field}
                        type={type}
                        placeholder={placeholder}
                        style={{height : "2.5rem"}}
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
export default CustomInput