import styled from 'styled-components';

const LinkButton = styled.a`
  border-radius: 3px;
  padding: 0.5rem 1rem 0.5rem 2rem;
  transition-property: color, background-color, border-color;
  transition-duration: 400ms;
  transition-timing-function: ease;
  position: relative;
  &:hover,
  &:focus {
    background-color: ${({theme}) => theme.color.primary};
    color: white;
  }
`;

export default LinkButton;
