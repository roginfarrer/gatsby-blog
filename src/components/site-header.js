import React from 'react';
import {Link} from 'gatsby';
import styled, {keyframes} from 'styled-components';

const colorChange = theme => keyframes`
  0% { color: ${theme.color.red}; }
  50% { color: ${theme.color.primary}; }
  100% { color: ${theme.color.red}; }
`;

const HeaderContainer = styled.header`
  max-width: ${({theme}) => theme.pageWidth};
  margin: 2em auto 0;
`;

const Title = styled.h1`
  margin: 0;
  text-transform: uppercase;
  font-size: 1rem;
  flex: 1;
`;

const TitleLink = styled(Link)`
  color: ${({theme}) => theme.color.base};
  text-decoration: none;

  &:hover,
  &:focus {
    .SiteHeader-title {
      animation: ${({theme}) => `${colorChange(theme)} 1s linear infinite`};
    }
  }
`;

const TitleByline = styled.span`
  font-weight: normal;
`;

const StyledHeader = ({siteTitle, author, ...props}) => (
  <HeaderContainer>
    <Title>
      <TitleLink to="/">
        <span className="SiteHeader-title">{siteTitle}</span>
        <TitleByline className="SiteHeader-byline">
          &nbsp;by {author}
        </TitleByline>
      </TitleLink>
    </Title>
  </HeaderContainer>
);

export default StyledHeader;
