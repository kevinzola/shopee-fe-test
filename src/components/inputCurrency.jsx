import React, { Component } from "react";
class InputCurrency extends Component {
  render() {
    const { input, onChange } = this.props;
    return (
      <React.Fragment>
        <div>USD - United States Dollars</div>
        USD
        <input type="text" defaultValue={input} onChange={onChange} />
      </React.Fragment>
    );
  }
}

export default InputCurrency;
