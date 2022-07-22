import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
function Select({ select, selectedItem, options, onKeyDown }) {
  const [stateOptions, setOptions] = useState(options);
  const [selectedValue, setSelectedValue] = useState(selectedItem);
  console.log(selectedValue);
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
    <div>
      {/* <AsyncCreatableSelect
        cacheOptions
        defaultOptions
        loadOptions={getAllCollections}
      /> */}
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
    </div>
  );
}
export default Select;
