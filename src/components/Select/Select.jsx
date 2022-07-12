import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";

function Select({ select, selectedItem, options, onKeyDown }) {
  const [stateOptions, setOptions] = useState(options);
  const [selectedValue, setSelectedValue] = useState(selectedItem);
  const createOption = (label) => ({
    label,
    value: label.toLowerCase().replace(/\W/g, ""),
  });
  const handleCreate = (option) => {
    const newOption = createOption(option);
    setOptions([...stateOptions, newOption]);
    setSelectedValue(newOption);
    select(newOption);
  };
  return (
    <CreatableSelect
      onChange={(e) => {
        select(e);
        setSelectedValue(e);
      }}
      onCreateOption={handleCreate}
      options={stateOptions}
      value={selectedValue}
      defaultValue={selectedItem}
      onKeyDown={onKeyDown}
    ></CreatableSelect>
  );
}
export default Select;
