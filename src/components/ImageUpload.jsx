import { useState, useEffect } from "react";
import styled from "styled-components";
import Flex from "./Flex";
import UploadFileButton from "./UploadFileButton";

const PreviewImage = styled.img`
  height: 200px;
  border-radius: 4px;
  width: fit-content;
`;
export const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  return (
    <Flex direction={"column"} align={"center"}>
      {selectedFile && <PreviewImage alt="preview" src={preview} />}
      <UploadFileButton onChange={onSelectFile} />
    </Flex>
  );
};
