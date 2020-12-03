import theme from "@/styles/theme";
import styled, { css } from "styled-components";
import SocialLogin from "./SocialLogin";
import { StyledButton } from "./Styled/Button";
import StyledInput from "./Styled/Input";
import { FlexDiv } from "./Styled/Layout";
const StyledCard = styled.div`
  padding: 1rem;
  border-radius: 0.4rem;
  background-color: ${theme["default"].containerBackgroundColor};
  margin-top: 1rem;
  @media screen and (min-width: 700px) {
    max-width: 50rem;
    margin: 0 auto;
  }
`;
const StyledOne = styled.h1`
  text-align: center;
  margin: 1rem 0;
`;

const ForgotP = styled.p`
  color: ${theme["default"].linkTextColor};
  font-size: 1.4rem;
  text-align: center;
  margin: 2rem 0;
  font-weight: bold;
`;
// StyledCard.defaultProps = {
//   theme: {
//     main: theme["default"].containerBackgroundColor,
//   },
// };

const StyledForm = styled.form``;

const LoginCard = () => {
  return (
    <StyledCard>
      <StyledOne>ログイン</StyledOne>
      <StyledForm>
        <label>Eメール・ユーザー名</label>
        <StyledInput
          type="text"
          aria-autocomplete="email username"
          autocomplete="email username"
          placeholder="Eメール・ユーザー名"
        ></StyledInput>
        <label>パスワード</label>
        <StyledInput
          type="password"
          aria-autocomplete="current-password"
          autocomplete="current-password"
          placeholder="パスワード"
        ></StyledInput>
        <FlexDiv margin="1rem 0" justify="flex-end">
          <StyledButton>ログインする</StyledButton>
        </FlexDiv>
        <ForgotP>パスワードを忘れた</ForgotP>
        <SocialLogin></SocialLogin>
      </StyledForm>
    </StyledCard>
  );
};
export default LoginCard;
