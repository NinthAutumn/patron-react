import styled, { css } from "styled-components";
import theme from "../../styles/theme";

const mainOptions = {
  white: css`
    background-color: ${theme["default"].containerBackgroundColor};
    box-shadow: ${theme["default"].verySmallBoxShadow};
  `,
  primary: css`
    border: 1px solid rgb(247, 247, 247);
    background-color: ${theme["default"].backgroundColor};
  `,
};

const StyledInput = styled.input`
  ${(props) => mainOptions[props.main]}
  box-sizing: border-box;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
  height: 4rem;
  font-size: 1.5rem;
  width: 100%;
  padding: 0 1.2rem;
  border-radius: 0.5rem;

  &:active,
  &:focus {
    outline: 0;
    border-radius: 0.5rem;
  }
`;

StyledInput.defaultProps = {
  main: "white",
};

export default StyledInput;
