import React from "react";

class Hamburger extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef();
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.myRef.current.checked = false;
  }

  render() {
    const { children }  = this.props;
    return (
      <nav id="page-nav">
        <label htmlFor="hamburger">&#9776;</label>
        <input type="checkbox" id="hamburger" ref={this.myRef} />
        <div className="buttons" onClick={this.onClick}>
          {children}
        </div>
      </nav>
    );
  }
}

export default Hamburger;
