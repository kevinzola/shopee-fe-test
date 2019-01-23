import React, { Component } from "react";
import "./App.css";
import InputCurrency from "./components/inputCurrency";
import Currency from "./components/currency";
import NewCurrency from "./components/newCurrency";
import ButtonMoreCurrency from "./components/buttonMoreCurrency";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

library.add(faPlus, faMinus);

class App extends Component {
  //set default currency
  state = {
    listCurrency: [
      { id: "CAD", text: "Canada Dollar", show: false, rate: 0 },
      { id: "IDR", text: "Indonesian Rupiah", show: true, rate: 0 },
      { id: "CHF", text: "Switzerland Franch", show: false, rate: 0 },
      { id: "EUR", text: "Euro", show: true, rate: 0 },
      { id: "GBP", text: "British Pound", show: true, rate: 0 },
      { id: "SGD", text: "Singapore Dollars", show: true, rate: 0 },
      { id: "INR", text: "India Rupee", show: false, rate: 0 },
      { id: "MYR", text: "Malaysian Ringgit", show: false, rate: 0 },
      { id: "JPY", text: "Japanese Yen", show: false, rate: 0 },
      { id: "KRW", text: "Korea Won", show: false, rate: 0 }
    ],
    input: 10, //Default Input Value
    showButtonNew: false //For showing New Button
  };

  //get data from WebService using axios
  async componentDidMount() {
    const {
      data: { rates }
    } = await axios.get("https://api.exchangeratesapi.io/latest?base=USD");

    var arrayRates = [];
    Object.keys(rates).map(i => {
      return (arrayRates[i] = rates[i]);
    });

    const listCurrency = this.state.listCurrency.map(row => {
      row.rate = arrayRates[row.id];
      return row;
    });

    this.setState({ listCurrency });
  }

  //custom styles
  cardStyles = {
    maxWidth: "35rem"
  };

  //Handling event

  handleInputChange = evt => {
    //Event Called when input currency change
    this.setState({
      input: evt.target.value
    });
  };

  handleNewCurrency = evt => {
    //Event Called when add a new currency
    const selectedCurrency = this.refSelectedCurrency.current.value;

    const listCurrency = this.state.listCurrency.map(row => {
      if (selectedCurrency === row.id) {
        row.show = true;
      }
      return row;
    });

    this.setState({ listCurrency, showButtonNew: false });
  };

  handleShowNewCurrency = () => {
    //Event Called when button more currency clicked
    this.setState({
      showButtonNew: true
    });
  };

  handleRemoveCurrency = id => {
    //Event Called when input a currency get removed
    const listCurrency = this.state.listCurrency.map(row => {
      if (id === row.id) {
        row.show = false;
      }
      return row;
    });

    this.setState({ listCurrency });
  };

  //set reference to new selected currency
  refSelectedCurrency = React.createRef();

  render() {
    //get Currency where state show is true
    const listDefaultCurrency = this.state.listCurrency.filter(
      c => c.show === true
    );

    //Selected Option for new currency
    const CurrencyOption = React.forwardRef((props, ref) => {
      const optionValue = props.listCurrency.map(row => (
        <option key={row.id} value={row.id}>
          {row.text}
        </option>
      ));
      return (
        <select className="custom-select" id="selectedCurrency" ref={ref}>
          {optionValue}
        </select>
      );
    });

    return (
      <div style={this.cardStyles} className="card">
        <div className="card-header">
          <InputCurrency
            input={this.state.input}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            {listDefaultCurrency.map(row => (
              <li className="list-group-item" key={row.id}>
                <Currency
                  key={row.id}
                  dataCurrency={row}
                  input={this.state.input}
                  onRemove={this.handleRemoveCurrency}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="card-footer">
          {this.state.showButtonNew ? (
            <NewCurrency onSubmit={this.handleNewCurrency}>
              <CurrencyOption
                ref={this.refSelectedCurrency}
                listCurrency={this.state.listCurrency}
              />
            </NewCurrency>
          ) : (
            <ButtonMoreCurrency
              onShowNewCurrency={this.handleShowNewCurrency}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
