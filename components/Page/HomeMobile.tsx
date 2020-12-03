import { ContainerDiv } from "../Styled/Layout";
import styled from "styled-components";
import theme from "../../styles/theme";
import { StyledButton } from "../Styled/Button";
import Image from "next/image";
import Home from "@/styles/Home.module.css";
import Search from "../Search";
import ServiceList from "../ServiceList";
const CustomOne = styled.h1`
  margin: 0;
  color: ${theme["default"].successTextColor};
`;

const CustomThree = styled.h3`
  z-index: 1;
  color: white;
`;

const SvgWrapper = styled.div`
  margin-left: 3rem;
  margin-top: 0.8rem;
`;

const CustomImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 0;
`;
const HomeMobile = () => {
  return (
    <div>
      <ContainerDiv height="200px">
        <CustomOne>自分の情熱・趣味に資金を供給しよう！</CustomOne>
        <CustomThree>
          熱中的ファンたちに月・年額・投げ銭であなたの活動を新たな方法でサポートを貰おう！
          サービス料金たったの5%、いつでも引出し可能！
        </CustomThree>
        <StyledButton margin="auto auto 0 0">
          始める
          <SvgWrapper>
            <Image
              src="/right.svg"
              alt="Svg of user "
              width="20px"
              height="20px"
            />
          </SvgWrapper>
        </StyledButton>
        <CustomImage src="/home-1.svg" alt="Svg of user " />
      </ContainerDiv>
      <ContainerDiv
        height="100px"
        background={theme["default"].backgroundColor}
      >
        <Search />
      </ContainerDiv>
      <ContainerDiv background={theme["default"].backgroundColor}>
        <ServiceList></ServiceList>
      </ContainerDiv>
    </div>
  );
};

export default HomeMobile;
