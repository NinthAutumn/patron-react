import dynamic from "next/dynamic";
import useMobileDetect from "@/utils/device";
// const MobileMain = dynamic(() => import("@/layout/mobile/index"));
import MobileMain from "@/layout/mobile";

const DefaultLayout = ({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) => {
  return (
    <>
      <div>
        <MobileMain></MobileMain>
      </div>
      <div>{children}</div>
    </>
  );
};
export default DefaultLayout;
