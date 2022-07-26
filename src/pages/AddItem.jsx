import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNewItem } from "../store/ItemsCollection/reducer";
import { clearItemCollectionAction } from "../store/ItemsCollection/actions";
import HandleItemInfo from "../containers/HandleItemInfo";

function AddItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addItem = async (collectionItem) => {
    await dispatch(addNewItem(collectionItem)).then(() => {
      dispatch(clearItemCollectionAction());
      navigate("/");
    });
  };
  return (
    <>
      <HandleItemInfo
        pageTitle={"Add New Collection Item"}
        buttonText={"Add"}
        onSubmit={addItem}
      />
    </>
  );
}

export default AddItem;
