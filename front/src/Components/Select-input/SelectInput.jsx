

import { get } from "react-hook-form";
import SelectBox from "./index";

const SelectInput = ({
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
            <SelectBox
                {...register(name, rules)}
                {...(hasError ? { variant: "error" } : { variant: variant })}
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

export default SelectInput;