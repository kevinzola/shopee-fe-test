import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Currency extends Component {
  render() {
    const {
      onRemove,
      input,
      dataCurrency: { id, text, rate }
    } = this.props;

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col">{id}</div>
            <div className="col">
              {this.moneyFormat(rate.toFixed(3) * input)}
            </div>
            <div className="col">
              <button onClick={() => onRemove(id)}>
                <FontAwesomeIcon icon="minus" />
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <i>
                {id} - {text}
              </i>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <i>1 USD = {id + " " + this.moneyFormat(rate)}</i>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  moneyFormat(value) {
    //get Money format with 3 decimal
    return value.toFixed(3).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  }
}

export default Currency;
