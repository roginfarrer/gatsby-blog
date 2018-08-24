import React from 'react';
import Layout from '../components/layout';
import {Link, graphql} from 'gatsby';
import styled from 'styled-components';
import {Provider as SiteHeaderProvider} from '../components/site-header';
import {breakpoints} from '../globalStyle';

const BlogIndex = styled.section`
  margin: 3em auto 0;
  max-width: 38em;
`;

const Post = styled.section`
  & + & {
    margin-top: 2em;
  }
`;

const PostHeader = styled.div`
  ${({theme}) => theme.media.sm`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `};
`;

const PostTitle = styled.h2`
  color: ${({theme}) => theme.color.primary};
  font-size: ${({theme}) => theme.fontSize.h3};
  margin: 0;
`;

const PostTitleLink = styled(Link)`
  text-decoration: none;
`;

const PostDate = styled.p`
  font-size: ${({theme}) => theme.fontSize.small}
  margin: 0;
`;

export default function Index({data = {}}) {
  const {edges: posts} = data.allMarkdownRemark;
  return (
    <SiteHeaderProvider value={{isLarge: true}}>
      <Layout>
        <BlogIndex>
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({node: post}) => {
              return (
                <Post key={post.id}>
                  <PostHeader>
                    <PostTitle>
                      <PostTitleLink to={post.frontmatter.path}>
                        {post.frontmatter.title}
                      </PostTitleLink>
                    </PostTitle>
                    <PostDate>{post.frontmatter.date}</PostDate>
                  </PostHeader>
                  <p>{post.frontmatter.excerpt || post.excerpt}</p>
                </Post>
              );
            })}
        </BlogIndex>
      </Layout>
    </SiteHeaderProvider>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
