import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { IRow } from '../../types/types';
import {
  classNameSwitcher,
  dragSwitcher,
  handleDragEnd,
  handleDragLeave,
  handleDragOver,
  handleDragStart,
  handleDrop,
} from '../../utils/dragAndDropUtils';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';

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

  const { className, disable, draggable } = useDragAndDrop(canvas, field, '1');
  const [dragOverClass, setDragOverClass] = useState('');
  //сделать состояние для фона и раскинуть его по функциям
  return (
    <div
      className={className + ' ' + dragOverClass}
      draggable={draggable}
      onDragStart={(e) => handleDragStart(e, dispatch)}
      onDragLeave={(e) => handleDragLeave(e, field, setDragOverClass)}
      onDragEnd={(e) => handleDragEnd(e, field, setDragOverClass)}
      onDragOver={(e) => handleDragOver(e, field, '1', setDragOverClass)}
      onDrop={(e) =>
        handleDrop(
          e,
          setCanvas,
          canvas,
          currentRowId,
          CurrentRowOrder,
          setDragOverClass
        )
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
