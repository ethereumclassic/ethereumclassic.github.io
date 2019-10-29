// TODO make this accessible
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

class Hamburger extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.myRef.current.checked = false;
  }

  render() {
    const { children, id = 'main', title } = this.props;
    const inputId = `${id}-hamburger`;
    return (
      <div className="hamburger">
        <input type="checkbox" id={inputId} ref={this.myRef} />
        <label htmlFor={inputId}>
          {title && (
            <>
              {title}
              &nbsp;
            </>
          )}
          &#9776;
        </label>
        <div className="buttons" onClick={this.onClick}>
          {children}
        </div>
      </div>
    );
  }
}

export default Hamburger;
