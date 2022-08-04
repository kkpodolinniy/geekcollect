import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../containers/Card";
import Input from "../../components/Input/Input";
import TextArea from "../../components/TextArea/TextArea";
import ComponentsWrapper from "../../components/ComponentsWrapper/ComponentsWrapper";
import Select from "../../components/Select/Select";
import PriceInput from "../../components/PriceInput";
import PageTitle from "../../components/PageTitle";
import Button from "../../components/Button";
import Flex from "../../components/Flex";
import { allCollectionsSelector } from "../../store/Collections/selectors";
import Loader from "../../components/Loader";
import { addCollectionToAPI } from "../../store/Collections/reducer";

const initialCollectionItem = {
  price: 0,
  title: "",
  collection: "",
  description: "",
  photo: "https://picsum.photos/200/300",
};

function HandleItemInfo({
  selectedItem = initialCollectionItem,
  pageTitle,
  buttonText,
  onSubmit,
}) {
  const [collectionItem, setCollectionItem] = useState(selectedItem);
  const inputTitle = useRef(null);
  const collections = useSelector(allCollectionsSelector);

  const initialSelectedValue = collections.find((collection) => {
    return Number(collection.id) === collectionItem.collection;
  });

  const dispatch = useDispatch();
  const [selectedOptionValue, setSelectedOptionValue] =
    useState(initialSelectedValue);

  useEffect(() => {
    inputTitle.current.focus();
  }, []);

  function addTitle(value) {
    setCollectionItem({ ...collectionItem, title: value });
  }

  function changeNewItemDescription(value) {
    setCollectionItem({ ...collectionItem, description: value });
  }
  function addNewCollection(value) {
    dispatch(addCollectionToAPI(value)).then((data) => {
      setSelectedOptionValue(data.payload);
      setCollectionItem({
        ...collectionItem,
        collection: Number(data.payload.id),
      });
    });
  }

  function changeExistedCollections(value) {
    setSelectedOptionValue(value);
    setCollectionItem({
      ...collectionItem,
      collection: Number(value.id),
    });
  }

  function changeItemPrice(value) {
    setCollectionItem({ ...collectionItem, price: value });
  }

  if (!collections.length) return <Loader />;

  return (
    <div>
      <PageTitle>{pageTitle}</PageTitle>
      <Flex>
        <Flex direction={"column"} justify={"center"} align="center">
          <Card
            edited
            {...collectionItem}
            collection={selectedOptionValue?.label}
          />
        </Flex>
        <Flex direction={"column"} justify={"center"}>
          <ComponentsWrapper mb={"10"}>
            <Select
              selectedItem={selectedOptionValue}
              options={collections}
              addNewCollection={addNewCollection}
              changeExistedCollections={changeExistedCollections}
            />
          </ComponentsWrapper>
          <Input
            ref={inputTitle}
            value={collectionItem.title ? collectionItem.title : ""}
            onChange={addTitle}
            placeholder="Add title..."
          />
          <ComponentsWrapper mb={"5"} mt={"10"}>
            <PriceInput
              value={collectionItem.price ? collectionItem.price : ""}
              onChange={changeItemPrice}
            ></PriceInput>
          </ComponentsWrapper>
          <ComponentsWrapper mb={"5"} mt={"10"}>
            <TextArea
              value={collectionItem.description}
              changeDescription={changeNewItemDescription}
            />
          </ComponentsWrapper>
          <Button
            onClick={() => onSubmit(collectionItem, selectedOptionValue)}
            warning
          >
            {buttonText}
          </Button>
        </Flex>
      </Flex>
    </div>
  );
}

export default HandleItemInfo;
