import React, { useReducer } from "react";
import reducer, { initialState } from "./reducers/index";
import "./App.css";
import {
  applyNumber,
  changeOperation,
  clearDisplay,
  memoryClear,
  memorySave,
  memoryPlus,
} from "./actions/index";
import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const applyNumero = (number) => {
    dispatch(applyNumber(number));
  };

  const operation = (operator) => {
    dispatch(changeOperation(operator));
  };

  const clearTotal = () => {
    dispatch(clearDisplay());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img width="40px" src="./Lambda-Logo-Red.png" /> Lambda Reducer
          Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton onClick={() => dispatch(memorySave())} value={"M+"} />
              <CalcButton onClick={() => dispatch(memoryPlus())} value={"MR"} />
              <CalcButton
                onClick={() => dispatch(memoryClear())}
                value={"MC"}
              />
            </div>

            <div className="row">
              <CalcButton onClick={() => applyNumero(1)} value={1} />
              <CalcButton onClick={() => applyNumero(2)} value={2} />
              <CalcButton onClick={() => applyNumero(3)} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={() => applyNumero(4)} value={4} />
              <CalcButton onClick={() => applyNumero(5)} value={5} />
              <CalcButton onClick={() => applyNumero(6)} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={() => applyNumero(7)} value={7} />
              <CalcButton onClick={() => applyNumero(8)} value={8} />
              <CalcButton onClick={() => applyNumero(9)} value={9} />
            </div>

            <div className="row">
              <CalcButton onClick={() => operation("+")} value={"+"} />
              <CalcButton onClick={() => operation("*")} value={"*"} />
              <CalcButton onClick={() => operation("-")} value={"-"} />
            </div>

            <div className="row ce_button">
              <CalcButton onClick={() => clearTotal()} value={"CE"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
