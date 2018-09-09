import React from 'react';
import Layout from '../components/layout';
import {Link, graphql} from 'gatsby';
import styled, {keyframes} from 'styled-components';
import {theme} from '../globalStyle';
import Img from 'gatsby-image';

const avatarEnter = keyframes`
  0% {
    transform: rotate(-20deg) scale(.9);
    opacity: 0;
  }
  100% {
    transform: rotate(0deg) scale(1);
    opacity: 1;
  }
`;

const Page = styled.article`
  max-width: ${({theme}) => theme.pageWidth};
  margin: 2em auto;
`;

const MeContainer = styled.div`
  max-width: 400px;
  margin: 0 auto 2em;
`;

const Me = styled(Img)`
  border-radius: 50%;
  animation: ${avatarEnter} 3s ease;
`;

const P = styled.p`
  margin-bottom: 1.25em;
`;

const SocialAnchor = styled.a`
  color: ${({color}) => color};
`;

const StyledSocialAnchor = ({color, ...props}) => (
  <SocialAnchor rel="noopener noreferrer" target="_blank" {...props} />
);

export default ({data}) => (
  <Layout>
    <Page>
      <MeContainer>
        <Me sizes={data.avatarImg.childImageSharp.sizes} />
      </MeContainer>
      <P>
        I'm Rogin Farrer, and I'm a web developer at{' '}
        <a href="https://wayfair.com" rel="noopener noreferrer" target="blank">
          Wayfair
        </a>
        . I work on the Wayfair's Homebase Design System. That includes the
        customer-facing pattern library, but mostly the pattern libraries for
        our enterprise users. I spend most of my day in React and SCSS, and some
        styled-components.
      </P>
      <P>
        Find me on{' '}
        <StyledSocialAnchor
          color={theme.color.brands.twitter}
          href="https://twitter.com/roginfarrer"
        >
          Twitter
        </StyledSocialAnchor>
        ,{' '}
        <StyledSocialAnchor
          color={theme.color.brands.github}
          href="https://github.com/roginfarrer"
        >
          Github
        </StyledSocialAnchor>
        , and{' '}
        <StyledSocialAnchor
          color={theme.color.brands.linkedin}
          href="https://www.linkedin.com/in/roginfarrer/"
        >
          LinkedIn
        </StyledSocialAnchor>
        .
      </P>
    </Page>
  </Layout>
);

export const query = graphql`
  query indexQuery {
    avatarImg: file(relativePath: {eq: "avatar-cropped.jpg"}) {
      childImageSharp {
        sizes(maxWidth: 400) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;
