import React, {  useState } from 'react';
import { get } from 'react-hook-form';
import { IoMdArrowDropdown } from 'react-icons/io';
import Select, {
  components,
} from 'react-select';


const Control = ({ children, ...props }) => {
  const style = { cursor: 'pointer' };
  return (
    <components.Control {...props}>
      {children}
    </components.Control>
  );
};
const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <IoMdArrowDropdown color='#747474' size={20} />
    </components.DropdownIndicator>
  );
};

const SelectBox = (props) => {
  const error = get(props.errors, props.name);
  const hasError = !!error;
  const styles = {
    control: (css) => ({ ...css, border: `1px solid ${hasError ? "#F64E60" : "#353d47"}`, borderRadius: "8px", height: "3rem" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        color: isSelected ? 'white' : "black",
        backgroundColor: isSelected ? 'blue' : "white",
        cursor: isDisabled ? 'not-allowed' : 'default',
      };
    },
    menu: base => ({
      ...base,

      zIndex: 100,
    }),
  };
  return (
    <div>
      <p className="text-black text-md font-bold text-right my-2 mr-1">{props.label}</p>
      <Select
        {...props}
        options={props.options}
        components={{ Control, DropdownIndicator, IndicatorSeparator: () => null }}
        styles={styles}
        onChange={props.onChange}
      />
      {
        hasError && (
          <p className="mt-1 text-sm text-error ">
            {error.message}
          </p>
        )
      }
    </div>
  );
};

export default SelectBox;