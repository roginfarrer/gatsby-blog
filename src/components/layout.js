import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import '../assets/sanitize.css';
import { globalStyle, theme } from '../globalStyle';
import styled, { ThemeProvider } from 'styled-components';

const Content = styled.main`
  color: ${({ theme }) => theme.color.base};
  line-height: 1.5;
  margin: 0 auto;
`;

const Container = ({ children, data, theme }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
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
            { name: 'keywords', content: 'sample, something' }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>{children}</Content>
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
