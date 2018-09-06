import React from 'react';
import PropTypes from 'prop-types';
import styled, {keyframes} from 'styled-components';
import {Link} from 'gatsby';
import AnchorButton from './base/link-button';

const LinkButton = AnchorButton.withComponent(Link).extend`
  position: relative;
  overflow-x: hidden;
  padding: 0;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ReadMoreArrow = styled.svg`
  height: 15px;
  width: 15px;
  fill: currentColor;
  margin-left: 5px;
  /* animation: ${fadeIn} 600ms ease; */
`;

const ReadMoreContent = styled.div`
  padding: 0.5rem 1rem 0 1rem;
  text-decoration: underline;
  display: inline-block;
  transition: transform 400ms ease;
  overflow: hidden;
  white-space: nowrap;
  transform: ${({isActive}) =>
    isActive ? 'translateX(0)' : 'translateX(2rem)'};
`;

export default class ReadMore extends React.Component {
  state = {
    isHovered: false
  };

  handleMouseEnter = () => this.setState({isHovered: true});
  handleMouseLeave = () => this.setState({isHovered: false});

  render() {
    return (
      <LinkButton
        {...this.props}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onFocus={this.handleMouseEnter}
        onBlur={this.handleMouseLeave}
      >
        <ReadMoreContent isActive={this.state.isHovered}>
          Continue Reading
          <ReadMoreArrow
            viewBox="0 0 17 16"
            xmlns="http://www.w3.org/2000/svg"
            // isActive={this.state.isHovered}
          >
            <path d="M16.992,7.98 L10.687,14.673 C10.228,15.132 9.527,14.969 9.328,14.767 C8.926,14.364 8.986,13.769 9.389,13.365 L13.284,8.927 L1.97,8.925 C1.458,8.924 1.044,8.499 1.043,7.973 C1.042,7.448 1.458,7.022 1.97,7.023 L13.182,7.01 L9.327,2.739 C8.925,2.335 8.925,1.68 9.327,1.278 C9.727,0.873 10.277,0.974 10.679,1.379 L16.992,7.98 L16.992,7.98 Z" />
          </ReadMoreArrow>
        </ReadMoreContent>
      </LinkButton>
    );
  }
}
