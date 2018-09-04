import {injectGlobal, css} from 'styled-components';

export const globalStyle = theme => injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Catamaran:400,700|Vollkorn:700');

  html {
    font-family: ${theme.fontFamily};
    font-size: 16px;
  }

  body {
    min-height: 100vh;
    font-size: ${theme.fontSize.body}
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: ${theme.color.primary};
  }

  p {
    margin: 0;
  }

  a,
  area,
  button,
  input,
  label,
  select,
  summary,
  textarea,
  [tabindex] {
    &:focus {
      outline: 1px dashed ${theme.color.base};
      outline-offset: 2px;
    }
  }

  img {
    max-width: 100%;
  }

  figure {
    margin: 0 -5em;
    text-align: center;
    figcaption {
      color: ${theme.color.lightBase};
      font-size: ${theme.fontSize.small}
    }
  }
  h2, h3, h4 {
    font-family: 'Vollkorn';
  }
`;

const serifFallback = `"BlinkMacSystemFont", -apple-system, "Helvetica Neue",
Helvetica, sans-serif`;

export const breakpoints = {
  xs: 450,
  sm: 640,
  md: 1024,
  lg: 1141,
  xl: 1400
};

export const theme = {
  color: {
    base: '#221924',
    lightBase: '#666',
    primary: '#007acc',
    red: '#d14054'
  },
  serifFallback,
  fontFamily: `"Catamaran", ${serifFallback}`,
  fontSize: {
    small: '0.8125rem', // 13px
    body: '1rem', // 16px
    medium: '1.25rem', // 20px
    large: '1.5rem', // 24px
    xl: '2rem', // 32px
    roadsign: '3rem' // 48
  },
  media: {
    ...Object.keys(breakpoints).reduce((acc, label) => {
      // `any` type below to allow whatever values that styled-components accepts in the css function
      acc[label] = (...args: any) => css`
        @media screen and (min-width: ${breakpoints[label]}px) {
          ${css(...args)};
        }
      `;
      return acc;
    }, {})
  }
};
