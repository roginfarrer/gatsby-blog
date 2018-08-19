import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './site-header';
import '../assets/styles/style.css';
import { globalStyle, theme } from '../globalStyle';
import styled, { ThemeProvider } from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Content = styled.main`
  color: ${({ theme }) => theme.color.base};
  line-height: 1.5;
  margin: 0 auto;
`;

const Footer = styled.footer`
  border-top: 1px solid #666;
  margin: 3em auto 0;
  padding: 0.5em;
  width: 38em;
`;

const TwitterLink = styled.a`
  color: #1da1f2;
`;

const GithubLink = styled.a`
  color: #0366d6;
`;

const FooterText = styled.span`
  font-size: 0.85rem;
`;

const Container = ({ children, data, theme }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
            { name: 'theme-color', content: theme.color.primary }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header
          siteTitle={data.site.siteMetadata.title}
          author={data.site.siteMetadata.author}
        />
        <Content>{children}</Content>
        <Footer>
          <FooterText>
            You can find me on{' '}
            <TwitterLink href="https://twitter.com/roginfarrer">
              Twitter
            </TwitterLink>{' '}
            and{' '}
            <GithubLink href="https://github.com/roginfarrer">
              Github
            </GithubLink>
            .
          </FooterText>
        </Footer>
      </>
    )}
  />
);

Container.propTypes = {
  children: PropTypes.node.isRequired
};

class WrappedContainer extends React.Component {
  constructor(props) {
    super(props);
    globalStyle(theme);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container {...this.props} theme={theme} />
      </ThemeProvider>
    );
  }
}

export default WrappedContainer;
