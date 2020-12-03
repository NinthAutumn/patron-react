import {
  faBell,
  faComments,
  faHome,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import theme from "@/styles/theme";
import ActiveLink from "../../components/Util/ActiveLink";
import { useRouter } from "next/router";

const MobileMainDiv = styled.div`
  height: 4.5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  box-shadow: ${theme["default"].boxShadow};
  background-color: ${theme["default"].containerBackgroundColor};
`;

const MobileMainContainer = styled.div`
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
`;

const MobileMainItem = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 2.2rem;
  position: relative;
  color: ${theme["default"].textColor};
  .active-link {
    transform: scale(1.1);
    transition: 200ms;
    font-weight: bold;
    span {
      color: ${theme["default"].linkTextColor};
    }
  }
`;
const MobileMainAvatar = styled.div`
  width: 100%;
  position: absolute;
  bottom: 20%;
  border-radius: 100px;
  //   box-shadow: ${theme["default"].boxShadow};
  div {
    box-shadow: ${theme["default"].boxShadow};
    border-radius: 100px;
  }
`;
const IconContainer = styled.div`
  display: flex;
  font-size: 2.2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
const CustomSpan = styled.span`
  font-size: 0.8rem;
  color: ${theme["default"].labelTextColor};
  &:hover {
    color: ${theme["default"].linkTextColor};
  }
`;
const MobileMainNav = () => {
  const router = useRouter();

  const list = [
    { name: "ホーム", icon: faHome, link: "/" },
    { name: "投稿", icon: faComments, link: "/user/posts" },
    { name: "user", icon: "", img: "/profile.webp", link: false },
    { name: "検索", icon: faSearch, link: "/search" },
    { name: "通知", icon: faBell, link: "/user/notification" },
  ];

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/auth/login");
  };

  const isAvatar = (val) =>
    val.link ? (
      <ActiveLink activeClassName="active-link" href={val.link}>
        <IconContainer>
          <FontAwesomeIcon icon={val.icon}></FontAwesomeIcon>
          <CustomSpan>{val.name}</CustomSpan>
        </IconContainer>
      </ActiveLink>
    ) : (
      <MobileMainAvatar onClick={handleClick}>
        <Image src={val.img} height="100" width="100"></Image>
        {/* <img src={val.img} width="60" height="60" alt="" /> */}
      </MobileMainAvatar>
    );
  return (
    <MobileMainDiv>
      <MobileMainContainer>
        {list.map((val, item) => {
          return (
            <MobileMainItem key={val.name}>{isAvatar(val)}</MobileMainItem>
          );
        })}
      </MobileMainContainer>
    </MobileMainDiv>
  );
};

export default MobileMainNav;
