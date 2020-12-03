import styled from "styled-components";
import theme from "../../styles/theme";

export const FlexDiv = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  flex-direction: ${(props) => props.direction};
  margin: ${(props) => props.margin};
`;

FlexDiv.defaultProps = {
  justify: "center",
  align: "center",
  direction: "row",
  margin: "0",
};

export const ContainerDiv = styled.div`
  position: relative;
  height: ${(props) => props.height};
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: ${(props) => props.background};
`;

ContainerDiv.defaultProps = {
  background: "#092540",
  height: "100%",
};
