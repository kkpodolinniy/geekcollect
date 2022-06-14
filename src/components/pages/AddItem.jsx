import React, { useState } from "react";
import { ImageUpload } from "../ImageUpload";
import Button from "../UI/Button";
import Flex from "../UI/Flex";
import Input from "../UI/Input";
import TextArea from "../UI/TextArea";
import ComponentsWrapper from "../UI/ComponentsWrapper";
import Select from "../UI/Select";
import PageTitle from "../UI/PageTitle";
import { useDispatch } from "react-redux";
import { addCollectionItem } from "../../store/collectItemSlice";

function AddItem() {
  const dispatch = useDispatch();
  const [collectionItem, setCollectionItem] = useState({
    title: "",
    collection: "without collection",
    description: "",
    photo: "https://picsum.photos/200/300",
  });

  function addTitle(value) {
    setCollectionItem({ ...collectionItem, title: value });
  }

  function changeNewItemDescription(value) {
    setCollectionItem({ ...collectionItem, description: value });
  }
  function changeItemCollection(value) {
    setCollectionItem({ ...collectionItem, collection: value });
  }

  const addItem = () => {
    dispatch(addCollectionItem(collectionItem));
  };
  return (
    <>
      <Flex justify={"center"}>
        <PageTitle>Add new item to your collection</PageTitle>
      </Flex>
      <Flex>
        <Flex direction={"column"} justify={"center"} align="center">
          <p>{collectionItem.title}</p>
          <ImageUpload />
        </Flex>
        <Flex direction={"column"}>
          <ComponentsWrapper mb={"10"}>
            <Select select={changeItemCollection} />
          </ComponentsWrapper>
          <Input
            onChange={addTitle}
            type="text"
            name="collection-name"
            id="collectionName"
          />
          <ComponentsWrapper mb={"5"} mt={"10"}>
            <TextArea changeDescription={changeNewItemDescription} />
          </ComponentsWrapper>
          <Button onClick={addItem} warning>
            Add
          </Button>
        </Flex>
      </Flex>
    </>
  );
}

export default AddItem;
