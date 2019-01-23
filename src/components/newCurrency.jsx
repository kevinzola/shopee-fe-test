import React, { Component } from "react";
class NewCurrency extends Component {
  constructor(props) {
    super(props);
    this.refSelectedCurrency = React.createRef();
  }
  render() {
    const { onSubmit } = this.props;
    return (
      <div className="input-group">
        {this.props.children}
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            onClick={onSubmit}
            type="button"
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default NewCurrency;
