import styled from "styled-components";
import theme from "../../styles/theme";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  white-space: nowrap;
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize};
  border-radius: 100px;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  box-shadow: ${(props) => props.shadow};
  margin: ${(props) => props.margin};
`;

StyledButton.defaultProps = {
  height: "3.5rem",
  padding: "0 2.5rem",
  fontSize: "1.6rem",
  background: theme.default.linkTextColor,
  color: "white",
  shadow: "none",
  margin: "0",
};
