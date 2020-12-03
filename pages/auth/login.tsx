import DefaultLayout from "@/layout/defaut";
import Head from "next/head";
import LoginCard from "@/components/LoginCard";
import StyledPageContainer from "@/components/Styled/Page";
const AuthLogin = () => {
  return (
    <>
      <Head>
        <title> ログインページ　- Onjin.jp</title>
      </Head>
      <StyledPageContainer>
        <LoginCard></LoginCard>
      </StyledPageContainer>
    </>
  );
};
export default AuthLogin;
