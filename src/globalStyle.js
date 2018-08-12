import { injectGlobal } from 'styled-components';

export const globalStyle = theme => injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Muli:400,400i,700');

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
`;

export const theme = {
  color: {
    base: '#333',
    primary: '#d62a3e'
  },
  fontFamily: `"Muli", "BlinkMacSystemFont", -apple-system, "Helvetica Neue",
  Helvetica, sans-serif`,
  fontSize: {
    body: '1rem'
  }
};
