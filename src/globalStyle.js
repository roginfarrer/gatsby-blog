import {injectGlobal, css} from 'styled-components';

export const globalStyle = theme => injectGlobal`
  /* @import url('https://fonts.googleapis.com/css?family=Zilla+Slab:900'); */
  /* @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,700|Zilla+Slab:700');
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Serif:400,400i,700|');
  @import url('https://fonts.googleapis.com/css?family=Karla:400|Fanwood+Text:400,400i,700');
  @import url('https://fonts.googleapis.com/css?family=Inconsolata:400,700|Karla:400,700');
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,700|'); */
  /* @import url('https://fonts.googleapis.com/css?family=Special+Elite|Vollkorn:400,400i,700'); */
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
    base: '#333',
    lightBase: '#666',
    primary: '#007acc'
  },
  serifFallback,
  fontFamily: `"Catamaran", ${serifFallback}`,
  fontSize: {
    small: '0.707rem',
    body: '1rem',
    h1: '3.157rem',
    h2: '2.369rem',
    h3: '1.777rem',
    h4: '1.333rem'
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
