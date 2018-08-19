import { injectGlobal } from 'styled-components';

export const globalStyle = theme => injectGlobal`
  /* @import url('https://fonts.googleapis.com/css?family=Zilla+Slab:900'); */
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,700|Zilla+Slab:700');

  html {
    font-family: ${theme.fontFamily};
  }

  body {
    min-height: 100vh;
    font-size: 18px;
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
`;

const serifFallback = `"BlinkMacSystemFont", -apple-system, "Helvetica Neue",
Helvetica, sans-serif`;

export const theme = {
  color: {
    base: '#333',
    lightBase: '#666',
    primary: '#007acc'
  },
  serifFallback,
  fontFamily: `"IBM Plex Sans", ${serifFallback}`,
  fontSize: {
    small: '0.707rem',
    body: '1rem',
    h1: '3.157rem',
    h2: '2.369rem',
    h3: '1.777rem',
    h4: '1.333rem'
  }
};
