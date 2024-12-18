import { useState } from 'react';
import { IRowProps } from '../../types/types';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';
import {
  disableChecker,
  handleDoubleClick,
  handleDragEnd,
  handleDragLeave,
  handleDragOver,
  handleDragStart,
  handleDrop,
} from '../../utils/dragAndDropUtils';
import { useSwapRows } from '../../hooks/useSwapRows';
import { useOperation } from '../../hooks/useOperation';

const Row1 = ({ canvas, setCanvas, field }: IRowProps) => {
  const [dragOverClass, setDragOverClass] = useState('');
  const [dragStartClass, setDragStartClass] = useState('');
  const { className, draggable } = useDragAndDrop(canvas, field, '1');
  const {
    currentOperand,
    operation,
    previousOperand,
    currentRowId,
    runTime,
    dispatch,
  } = useOperation();
  const { setCurrentRow, setCurrentRowIndex, setLyingRow, setLyingRowIndex } =
    useSwapRows(setCanvas, canvas, currentRowId, field);
  const disableCheck = disableChecker(className, '1');

  return (
    <div
      className={className + ' ' + dragOverClass + ' ' + dragStartClass}
      draggable={runTime ? false : draggable}
      onDragStart={(e) => handleDragStart(e, dispatch, setDragStartClass)}
      onDragLeave={(e) => handleDragLeave(e, setDragOverClass)}
      onDragEnd={(e) => handleDragEnd(e, setDragOverClass, setDragStartClass)}
      onDragOver={(e) => handleDragOver(e, field, setDragOverClass)}
      onDrop={(e) =>
        handleDrop(
          e,
          canvas,
          currentRowId,
          setDragOverClass,
          setCurrentRow,
          setCurrentRowIndex,
          setLyingRow,
          setLyingRowIndex,
          disableCheck
        )
      }
      onDoubleClick={
        disableCheck
          ? undefined
          : (e) => handleDoubleClick(e, setCanvas, canvas, runTime)
      }
      id="1"
    >
      <div className="calculator__output">
        <div className="calculator__previous-operand">
          {disableCheck ? null : `${previousOperand} ${operation}`}
        </div>
        <div
          className={
            currentOperand.length > 14
              ? 'calculator__current-operand operand--small'
              : 'calculator__current-operand'
          }
        >
          {disableCheck ? null : currentOperand}
        </div>
      </div>
    </div>
  );
};

export default Row1;
