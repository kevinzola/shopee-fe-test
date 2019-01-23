import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class ButtonMoreCurrency extends Component {
  render() {
    const onShowNewCurrency = this.props.onShowNewCurrency;
    return (
      <button
        type="button"
        className="btn btn-primary btn-lg btn-block"
        onClick={onShowNewCurrency}
      >
        <FontAwesomeIcon icon="plus" /> Add More Currencies
      </button>
    );
  }
}

export default ButtonMoreCurrency;
