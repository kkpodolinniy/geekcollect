import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
function Select({
  changeExistedCollections,
  addNewCollection,
  selectedItem,
  options,
  onKeyDown,
}) {
  const handleCreate = (option) => {
    addNewCollection(option);
  };

  return (
    <div>
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
