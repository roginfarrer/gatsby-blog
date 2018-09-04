import React from 'react';
import {graphql} from 'gatsby';
import Layout from './layout';
import MarkdownWrapper from './markdown-wrapper';
import styled from 'styled-components';

const Article = styled.article`
  max-width: 38em;
  margin: 0 auto;
`;

const ArticleTitle = styled.h2`
  font-size: ${({theme}) => theme.fontSize.roadsign};
  margin: 1.414em 0 0.5em;
`;

const ArticleDate = styled.span;

const Template = ({data}) => {
  const {markdownRemark: post} = data;
  return (
    <Layout>
      <Article>
        <ArticleTitle>{post.frontmatter.title}</ArticleTitle>
        <MarkdownWrapper dangerouslySetInnerHTML={{__html: post.html}} />
      </Article>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        excerpt
      }
    }
  }
`;

export default Template;
