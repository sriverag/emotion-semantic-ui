import React from 'react'
import PropTypes from 'prop-types'
import { css } from "emotion";
import styled from "react-emotion";

class Button extends React.Component {

  render() {
    const { className } = this.props

    return (
      <button className={ className }>
        {this.props.children}
      </button>
    )
  }
}

Button.propTypes = {
}

Button.defaultProps = {
}

const StyledButton = styled(Button)`
  cursor: pointer;
  display: inline-block;

  min-height: 1em;

  outline: none;
  border: none;
  vertical-align: @verticalAlign;
  background: @background;
  color: ${props => props.theme.text.color};

  font-family: ${props => props.theme.text.fontFamily};

  margin: 0em ${props => props.theme.button.margin.horizontal} ${props => props.theme.button.margin.vertical} 0em;
  padding: ${props => props.theme.button.margin.vertical} ${props => props.theme.button.margin.horizontal}
    (${props => props.theme.button.padding.vertical} + ${props => props.theme.button.shadow.offset});

  text-transform: @textTransform;
  text-shadow: @textShadow;
  font-weight: @fontWeight;
  line-height: @lineHeight;
  font-style: normal;
  text-align: center;
  text-decoration: none;

  border-radius: @borderRadius;
  box-shadow: @boxShadow;

  user-select: none;
  transition: @transition;
  will-change: @willChange;

  -webkit-tap-highlight-color: @tapColor;
`;

export default StyledButton;