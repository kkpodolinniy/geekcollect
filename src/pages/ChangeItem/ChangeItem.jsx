import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedItemIdAction,
  clearItemCollectionAction,
} from "../../store/ItemsCollection/actions";
import { changeItem } from "../../store/ItemsCollection/reducer";
import { addCollectionAction } from "../../store/Collections/actions";
import { collectionDetailSelector } from "../../store/Collections/selectors";
import { selectedItemInfoSelector } from "../../store/ItemsCollection/selectors";
import { useNavigate } from "react-router-dom";

import HandleItemInfo from "../../containers/HandleItemInfo";

function ChangeItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  dispatch(setSelectedItemIdAction(id));
  const selectedItem = useSelector(selectedItemInfoSelector); //TODO change name - "initial item info"
  const itemCollection = useSelector((state) =>
    collectionDetailSelector(
      state,
      selectedItem.collection ? selectedItem.collection : ""
    )
  );

  useEffect(() => {
    dispatch(setSelectedItemIdAction(id));
  }, [id, dispatch]);
  const changeItemCollection = async (collectionItem, selectedOptionValue) => {
    await dispatch(changeItem(collectionItem)).then(() => {
      dispatch(addCollectionAction(selectedOptionValue));
      dispatch(clearItemCollectionAction());
      navigate("/");
    });
  };
  return (
    <>
      {id ? (
        <HandleItemInfo
          selectedItem={selectedItem}
          itemCollection={itemCollection}
          pageTitle={"Edit Your Collection Item"}
          onSubmit={changeItemCollection}
          buttonText={"Change"}
        />
      ) : (
        <p>Wait, data is loading...</p>
      )}
    </>
  );
}

export default ChangeItem;
