import { useAppSelector } from '../../hooks/useReduxHooks';
import { rowCalculatorItems } from '../../slice/dragAndDropSlice';
import { IRow } from '../../types/types';
import './calculator.scss';
import React from 'react';

interface ICalculatorProps {
  canvas: IRow[];
  setCanvas: React.Dispatch<React.SetStateAction<IRow[]>>;
}
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
