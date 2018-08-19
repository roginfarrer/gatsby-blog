import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  max-width: 38em;
  margin: 2em auto 0;
`;

const Title = styled.h1`
  margin: 0;
  font-family: ${({ theme }) => `"Zilla Slab", ${theme.serifFallback}`};
  font-size: ${({ theme, isLarge }) => (isLarge ? theme.fontSize.h1 : null)};
  flex: 1;
`;

const TitleLink = styled(Link)`
  color: ${({ theme }) => theme.color.base};
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.primary};
  }
`;

const TitleByline = styled.div`
  font-family: ${({ theme }) => theme.fontFamily};
  font-style: italic;
  font-weight: normal;
  font-size: 1rem;
`;

const HeaderContext = React.createContext({ isLarge: false });
const { Consumer } = HeaderContext;

const StyledHeader = ({ siteTitle, author, ...props }) => (
  <Consumer>
    {value => (
      <HeaderContainer>
        <Title isLarge={value.isLarge}>
          <TitleLink to="/">
            {siteTitle} <TitleByline>by {author}</TitleByline>
          </TitleLink>
        </Title>
      </HeaderContainer>
    )}
  </Consumer>
);

export const { Provider } = HeaderContext;
export default StyledHeader;
