import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import { IRow, IRowProps } from '../../types/types';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';
import {
  handleDragEnd,
  handleDragLeave,
  handleDragOver,
  handleDragStart,
  handleDrop,
} from '../../utils/dragAndDropUtils';
import { useSwapRows } from '../../hooks/useSwapRows';

const Row1 = ({ canvas, setCanvas, field }: IRowProps) => {
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
  const runTime = useAppSelector((state) => state.calculator.runTime);
  const [dragOverClass, setDragOverClass] = useState('');

  const { className, draggable } = useDragAndDrop(canvas, field, '1');

  const { setCurrentRow, setCurrentRowIndex, setLyingRow, setLyingRowIndex } =
    useSwapRows(setCanvas, canvas as IRow[], currentRowId);

  return (
    <div
      className={className + ' ' + dragOverClass}
      draggable={runTime ? false : draggable}
      onDragStart={(e) => handleDragStart(e, dispatch)}
      onDragLeave={(e) => handleDragLeave(e, field, setDragOverClass)}
      onDragEnd={(e) => handleDragEnd(e, field, setDragOverClass)}
      onDragOver={(e) => handleDragOver(e, field, '1', setDragOverClass)}
      onDrop={(e) =>
        handleDrop(
          e,
          canvas,
          currentRowId,
          setDragOverClass,
          setCurrentRow,
          setCurrentRowIndex,
          setLyingRow,
          setLyingRowIndex
        )
      }
      id="1"
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
