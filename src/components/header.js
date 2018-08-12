import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  margin: 0;
  font-family: ${({ theme }) => theme.fontFamily};
  flex: 1;
`;

const TitleLink = styled.a`
  text-decoration: none;
`;

const StyledTitleLink = TitleLink.withComponent(Link);

const Navigation = styled.nav`
  display: inline-flex;
  justify-content: flex-end;
  flex: 1;
`;

const NavItem = styled.a`
  padding: 5px;
`;

const NavItemLink = NavItem.withComponent(Link);

const StyledHeader = ({ siteTitle, ...props }) =>
  console.log(props) || (
    <div>
      <HeaderContainer>
        <Title>
          <StyledTitleLink to="/">{siteTitle}</StyledTitleLink>
        </Title>
        <Navigation>
          <NavItem>Articles</NavItem>
          <NavItem>About</NavItem>
        </Navigation>
      </HeaderContainer>
    </div>
  );

export default StyledHeader;
