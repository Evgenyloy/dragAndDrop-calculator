import React from 'react';
import { rowCalculatorItems } from '../../slice/dragAndDropSlice';
import { ICalculatorProps } from '../../types/types';
import './calculator.scss';

function Calculator({ canvas, setCanvas }: ICalculatorProps) {
  return (
    <div className="calculator">
      {rowCalculatorItems.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <item.row
              canvas={canvas}
              setCanvas={setCanvas}
              field={'calculator'}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Calculator;
