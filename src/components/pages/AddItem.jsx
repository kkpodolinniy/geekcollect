import React from "react";
import { ImageUpload } from "../ImageUpload";
import Button from "../UI/Button";
import Flex from "../UI/Flex";
import Input from "../UI/Input";
import TextArea from "../UI/TextArea";
import ComponentsWrapper from "../UI/ComponentsWrapper";
import Select from "../UI/Select";
import PageContainer from "../UI/PageContainer";
import PageTitle from "../UI/PageTitle";

function AddItem() {
  return (
    <PageContainer>
      <Flex justify={"center"}>
        <PageTitle>Add new item to your collection</PageTitle>
      </Flex>
      <Flex>
        <Flex justify={"center"} align="center">
          <ImageUpload />
        </Flex>
        <Flex direction={"column"}>
          <ComponentsWrapper>
            <Select />
          </ComponentsWrapper>
          <Input type="text" name="collection-name" id="collectionName" />
          <ComponentsWrapper mb={"5"} mt={"10"}>
            <TextArea />
          </ComponentsWrapper>
          <Button warning>Add</Button>
        </Flex>
      </Flex>
    </PageContainer>
  );
}

export default AddItem;
