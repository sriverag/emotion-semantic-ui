import React from 'react'
import PropTypes from 'prop-types'
import { css } from "emotion";

const myStyle = css`
  color: rebeccapurple;
`;

class Button extends React.Component {

  render() {

    return (
      <div className={myStyle}>
        {this.props.children}
      </div>
    )
  }
}

Button.propTypes = {
}

Button.defaultProps = {
}

export default Button