import {
  faLine,
  faTwitter,
  faFacebook,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import theme from "../styles/theme";

const StyledFont = styled.div`
  font-size: inherit;
  color: inherit;
`;

const CustomFlexDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  border-radius: 10rem;
  box-shadow: ${theme["default"].verySmallBoxShadow};
  margin-bottom: 1.5rem;
  justify-content: space-between;
  user-select: none;
  cursor: pointer;
  color: ${(props) => props.color};
`;

const CustomP = styled.p`
  color: inherit;
  margin: 0 auto;
  font-weight: bold;
`;

const SocialLogin = () => {
  const list = [
    {
      name: "グーグル",
      icon: faGoogle,
      style: { background: "white" },
    },
    {
      name: "フェースブック",
      icon: faFacebook,
      style: { background: "white", color: "#4065b4" },
    },
    {
      name: "ツイッター",
      icon: faTwitter,
      style: { background: "white", color: "#059ff5" },
    },
    {
      name: "ライン",
      icon: faLine,
      style: { background: "white", color: "#1bb71f" },
    },
  ];
  return (
    <div>
      {list.map((val) => {
        return (
          <CustomFlexDiv key={val.name} color={val.style.color}>
            <StyledFont>
              <FontAwesomeIcon icon={val.icon}></FontAwesomeIcon>
            </StyledFont>
            <CustomP>{val.name}</CustomP>
          </CustomFlexDiv>
        );
      })}
    </div>
  );
};

export default SocialLogin;
