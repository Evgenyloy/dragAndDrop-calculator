import './calculator.scss';

function Calculator() {
  return (
    <div className="calculator">
      <div className="calculator__row-1">
        <div className="calculator__output">1234</div>
      </div>
      <div className="calculator__row-2">
        <div className="calculator__operation-button">/</div>
        <div className="calculator__operation-button">*</div>
        <div className="calculator__operation-button">-</div>
        <div className="calculator__operation-button">+</div>
      </div>
      <div className="calculator__row-3">
        <div className="calculator__digit-button">7</div>
        <div className="calculator__digit-button">8</div>
        <div className="calculator__digit-button">9</div>
        <div className="calculator__digit-button">4</div>
        <div className="calculator__digit-button">5</div>
        <div className="calculator__digit-button">6</div>
        <div className="calculator__digit-button">1</div>
        <div className="calculator__digit-button">2</div>
        <div className="calculator__digit-button">3</div>
        <div className="calculator__digit-button zero">0</div>
        <div className="calculator__digit-button">.</div>
      </div>
      <div className="calculator__row-4">
        <button className="calculator__evaluate">=</button>
      </div>
    </div>
  );
}

export default Calculator;
