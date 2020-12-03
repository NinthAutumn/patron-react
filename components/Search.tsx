import styled from "styled-components";
import theme from "../styles/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const SearchComponent = styled.div`
  padding: 2rem;
`;
const SearchComponentContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  padding: 1rem 2rem;
  border-radius: 100px;
  text-align: center;
  background: rgb(243, 243, 243);
  color: ${theme["default"].linkTextColor};
`;
const CustomP = styled.p`
  color: inherit;
  font-weight: bold;
  margin: 0 auto;
`;

const IconContainer = styled.div`
  font-size: inherit;
  color: ${theme["default"].linkTextColor};
`;

const Search = () => {
  return (
    <SearchComponent>
      <Link href="/search">
        <SearchComponentContainer>
          <IconContainer>
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          </IconContainer>
          <CustomP>クリエーターを検索</CustomP>
        </SearchComponentContainer>
      </Link>
    </SearchComponent>
  );
};

export default Search;
