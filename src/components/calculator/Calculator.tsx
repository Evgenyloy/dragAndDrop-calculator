import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import DigitButton from '../digitButton/DigitButton';
import OperationButton from '../operationButton/Operationbutton';
import { compute } from '../../slice/slice';
import './calculator.scss';

function Calculator() {
  const dispatch = useAppDispatch();
  const operation = useAppSelector((state) => state.calculator.operation);
  const currentOperand = useAppSelector(
    (state) => state.calculator.currentOperand
  );
  const previousOperand = useAppSelector(
    (state) => state.calculator.previousOperand
  );

  return (
    <div className="calculator">
      <div className="calculator__row-1">
        <div className="calculator__output">
          <div className="calculator__previous-operand">
            {`${previousOperand} ${operation}`}
          </div>
          <div className="calculator__current-operand">{currentOperand}</div>
        </div>
      </div>
      <div className="calculator__row-2">
        <OperationButton operation="/" />
        <OperationButton operation="*" />
        <OperationButton operation="-" />
        <OperationButton operation="+" />
      </div>
      <div className="calculator__row-3">
        <DigitButton digit="7" />
        <DigitButton digit="8" />
        <DigitButton digit="9" />
        <DigitButton digit="4" />
        <DigitButton digit="5" />
        <DigitButton digit="6" />
        <DigitButton digit="1" />
        <DigitButton digit="2" />
        <DigitButton digit="3" />
        <DigitButton digit="0" />
        <DigitButton digit="." />
        <DigitButton digit="AC" clear />
      </div>
      <div className="calculator__row-4">
        <button
          className="calculator__evaluate"
          onClick={() => dispatch(compute())}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
