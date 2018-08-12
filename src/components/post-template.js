import React from 'react';
import { graphql } from 'gatsby';
import Layout from './layout';
import MarkdownWrapper from './markdown-wrapper';
import styled from 'styled-components';

const Article = styled.article`
  max-width: 38em;
  margin: 0 auto;
`;

// import '../css/blog-post.css';

const Template = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <Article>
        <h1>{post.frontmatter.title}</h1>
        <MarkdownWrapper dangerouslySetInnerHTML={{ __html: post.html }} />
      </Article>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;

export default Template;
