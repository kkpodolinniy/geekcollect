import styled from "styled-components";
const StyledHeader = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: ${(props) => props.theme.colors.warning};

  & a {
    text-decoration: none;
    font-family: ${(props) => props.theme.fonts[4]};
    font-size: 20px;
    color: white;
    min-width: 108px;
    display: block;
    line-height: 70px;
    text-align: center;
  }

  & a.active::before {
    content: "";
    width: 0px;
    height: 0px;
    border-right: 10px solid transparent;
    border-top: 10px solid #f7f700;
    border-left: 10px solid #f7f700;
    border-bottom: 10px solid #f7f700;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    display: inline-block;
    position: relative;
    top: 4px;
    transform: rotate(357deg);
  }
`;
export { StyledHeader };
