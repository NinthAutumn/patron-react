import Head from "next/head";
import { ContainerDiv } from "../components/Styled/Layout";
import styled from "styled-components";
import theme from "../styles/theme";
import dynamic from "next/dynamic";

const MobilePage = dynamic(() => import("@/components/Page/HomeMobile"));
const DesktopPage = dynamic(() => import("@/components/Page/Home"));
import useMobileDetect from "../utils/device";
import DefaultLayout from "../layout/defaut";
import getMobileDetect from "../utils/device";

const Home = ({ deviceType }) => {
  const page = deviceType ? <MobilePage></MobilePage> : <DesktopPage />;
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{page}</main>
    </>
  );
};

export async function getServerSideProps(context) {
  // const UA = context.req.headers['user-agent'];
  const isMobile = getMobileDetect(context.req.headers["user-agent"]);
  return {
    props: {
      deviceType: isMobile.isMobile(),
    },
  };
}
// Home.Layout = DefaultLayout;
export default Home;
