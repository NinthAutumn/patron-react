import { StyledButton } from "./Styled/Button";
import { FlexDiv } from "./Styled/Layout";
import styled from "styled-components";
import theme from "../styles/theme";

const CustomImage = styled.img`
  position: absolute;
  right: 1rem;
  z-index: 0;
`;

const CustomSmallImage = styled.img`
  position: absolute;
  right: 1rem;
  z-index: 0;
  transform: scale(0.7);
`;
const ServiceContainer = styled.div`
  border-radius: 1rem;
  position: relative;
  height: 150px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background: ${theme["default"].textBackgroundColor};
`;

const CustomH2 = styled.h2`
  color: ${theme["default"].linkTextColor};
`;
const ServiceList = () => {
  return (
    <div>
      <FlexDiv direction="column;padding:1rem">
        <ServiceContainer>
          <CustomH2>年・月間会員制サブスク</CustomH2>
          <StyledButton
            margin="auto auto 0 0;z-index:1"
            height="3rem"
            fontSize="1.4rem"
            padding="0 2rem"
            shadow={theme["default"].smallBoxShadow}
            background={theme["default"].textColor}
          >
            詳細を見る
          </StyledButton>
          <CustomImage src="/sub-big.svg"></CustomImage>
        </ServiceContainer>
        <ServiceContainer>
          <CustomH2>投げ銭</CustomH2>
          <StyledButton
            margin="auto auto 0 0;z-index:1"
            height="3rem"
            fontSize="1.4rem"
            padding="0 2rem"
            shadow={theme["default"].smallBoxShadow}
            background={theme["default"].successTextColor}
          >
            詳細を見る
          </StyledButton>
          <CustomImage src="/tip-big.svg"></CustomImage>
        </ServiceContainer>
        <ServiceContainer>
          <CustomH2>ショップ</CustomH2>
          <StyledButton
            margin="auto auto 0 0;z-index:1"
            height="3rem"
            fontSize="1.4rem"
            padding="0 2rem"
            alt="ショップを描写している画像"
            shadow={theme["default"].smallBoxShadow}
          >
            詳細を見る
          </StyledButton>
          <CustomSmallImage src="/shop-big.svg"></CustomSmallImage>
        </ServiceContainer>
      </FlexDiv>
    </div>
  );
};

export default ServiceList;
