import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
function Select({
  changeExistedCollections,
  addNewCollection,
  selectedItem,
  options,
  onKeyDown,
}) {
  const [stateOptions, setOptions] = useState(options);
  const [selectedValue, setSelectedValue] = useState(selectedItem);
  const createOption = (label) => ({
    label,
    value: label.toLowerCase().replace(/\W/g, ""),
  });

  const handleCreate = (option) => {
    const newOption = createOption(option);
    addNewCollection(newOption);
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
          changeExistedCollections(e);
        }}
        onCreateOption={handleCreate}
        options={options}
        value={selectedItem}
        defaultValue={selectedItem}
        onKeyDown={onKeyDown}
      ></CreatableSelect>
    </div>
  );
}
export default Select;
