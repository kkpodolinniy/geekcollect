import styled from "styled-components";

export const CheckoutFormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  flex-direction: column;
  gap: 20px;
  flex-basis: 50%;

  & input {
    width: 100%;
  }
`;

export const FieldWrapper = styled.div`
  width: 100%;
`;

export const CheckoutWrapper = styled.div`
  display: flex;
`;
