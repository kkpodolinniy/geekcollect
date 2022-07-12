import styled from "styled-components";

const CollectionContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const EmptyCollectionContainer = styled.div`
  display: flex;
`;

const EmptyTitle = styled.p`
  font-family: ${(props) => props.theme.fonts[2]};
  font-size: 48px;
  letter-spacing: 0.12px;
  align-self: center;
  justify-self: center;
`;

const MockImage = styled.img`
  height: 400px;
`;

export { CollectionContainer, MockImage, EmptyCollectionContainer, EmptyTitle };
