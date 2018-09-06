import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';

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
      color: #d14054;
    }
    .SiteHeader-byline {
      color: ${({theme}) => theme.color.primary};
    }
  }
`;

const TitleByline = styled.span`
  font-weight: normal;
`;

const HeaderContext = React.createContext({isLarge: false});
const {Consumer} = HeaderContext;

const StyledHeader = ({siteTitle, author, ...props}) => (
  <Consumer>
    {value => (
      <HeaderContainer>
        <Title isLarge={value.isLarge}>
          <TitleLink to="/">
            <span className="SiteHeader-title">{siteTitle}</span>
            <TitleByline className="SiteHeader-byline">
              &nbsp;by {author}
            </TitleByline>
          </TitleLink>
        </Title>
      </HeaderContainer>
    )}
  </Consumer>
);

export const {Provider} = HeaderContext;
export default StyledHeader;
