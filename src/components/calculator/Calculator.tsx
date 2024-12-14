import { rowCalculatorItems } from '../../slice/dragAndDropSlice';
import './calculator.scss';
import React from 'react';

interface ICalculatorProps {
  itemsArr: {
    id: string;
    row: JSX.Element;
    order: number;
  }[];
  setItemsArr: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        row: JSX.Element;
        order: number;
      }[]
    >
  >;
}

function Calculator() {
  return (
    <div className="calculator">
      {rowCalculatorItems.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <item.row refs="drag" />
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Calculator;
