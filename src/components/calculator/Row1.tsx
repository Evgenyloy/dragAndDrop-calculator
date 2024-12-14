import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { IRow } from '../../types/types';
import {
  classNameSwitcher,
  dragSwitcher,
  handleDragOver,
  handleDragStart,
  handleDrop,
} from '../../utils/dragAndDropUtils';

export interface IRowProps {
  canvas?: IRow[];
  data: string;
  setCanvas?: React.Dispatch<React.SetStateAction<IRow[]>>;
  field: string;
}

const Row1 = ({ canvas, setCanvas, data, field }: IRowProps) => {
  const operation = useAppSelector((state) => state.calculator.operation);
  const currentOperand = useAppSelector(
    (state) => state.calculator.currentOperand
  );
  const previousOperand = useAppSelector(
    (state) => state.calculator.previousOperand
  );

  const dispatch = useAppDispatch();
  const currentRowId = useAppSelector(
    (state) => state.dragAndDrop.currentRowId
  );
  const CurrentRowOrder = useAppSelector(
    (state) => state.dragAndDrop.CurrentRowOrder
  );

  const [disable, setDisable] = useState(true);
  const [draggable, setDraggable] = useState(true);
  const [className, setClassName] = useState(
    'calculator__row calculator__row-1'
  );

  useEffect(() => {
    document.querySelector('.calculator__row')?.id;
    if (
      canvas?.some(
        (el) => el.id === document.querySelector('.calculator__row')?.id
      )
    ) {
      setDisable(false);
    }
    classNameSwitcher(field, disable, setClassName);
    dragSwitcher(field, disable, setDraggable);
  }, [disable, canvas]);

  return (
    <div
      className={className}
      draggable={draggable}
      onDragStart={(e) => handleDragStart(e, dispatch)}
      onDragLeave={(e) => e}
      onDragEnd={(e) => e}
      onDragOver={handleDragOver}
      onDrop={(e) =>
        handleDrop(e, setCanvas, canvas, currentRowId, CurrentRowOrder)
      }
      id="1"
      data-order={data}
    >
      <div className="calculator__output">
        <div className="calculator__previous-operand">
          {`${previousOperand} ${operation}`}
        </div>
        <div
          className={
            currentOperand.length > 14
              ? 'calculator__current-operand operand--small'
              : 'calculator__current-operand'
          }
        >
          {currentOperand}
        </div>
      </div>
    </div>
  );
};

export default Row1;
