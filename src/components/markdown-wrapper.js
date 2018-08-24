import React from 'react';

import styled from 'styled-components';

const MarkdownWrapper = styled.div`
  h3 {
    font-size: ${({theme}) => theme.fontSize.h3};
  }
  h4 {
    font-size: ${({theme}) => theme.fontSize.h4};
  }
  h3,
  h4 {
    line-height: 1.2em;
    margin: 1.414em 0 0.5em;
  }

  p {
    margin-bottom: 1.3em;
  }

  h3 {
    font-weight: 700;
  }

  li {
    list-style: none;
    margin-bottom: 0.5em;
  }

  ul,
  ol {
    padding-left: 3em;
    margin: 0.75em 0;
    counter-reset: listCounter;
    li {
      &::before {
        color: ${({theme}) => theme.color.primary};
        position: absolute;
      }
      counter-increment: listCounter;
      position: relative;
    }
  }

  ol li {
    list-style: none;
    &::before {
      content: counter(listCounter, decimal-leading-zero);
      right: 1em;
      font-size: 0.8rem;
      font-weight: bold;
      position: relative;
      bottom: 0.2em;
    }
  }

  ul li::before {
    content: counter(listCounter, disc);
    left: -1.25em;
    font-weight: bold;
  }

  blockquote {
    color: ${({theme}) => theme.color.lightBase}
    position: relative;
    margin: 2em 0;
    &::before {
      content: '';
      height: 120%;
      width: 2em;
      background-color: #017acc40;
      position: absolute;
      left: -0.75em;
      transform: matrix(1, 1, 0, -1, -8, -17);
    }
  }
`;

export default MarkdownWrapper;
