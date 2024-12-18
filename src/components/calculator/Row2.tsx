import { useState } from 'react';
import { IRowProps } from '../../types/types';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';
import OperationButton from '../operationButton/Operationbutton';
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

function Row2({ canvas, setCanvas, field }: IRowProps) {
  const [dragOverClass, setDragOverClass] = useState('');
  const [dragStartClass, setDragStartClass] = useState('');
  const { currentRowId, runTime, dispatch } = useOperation();
  const { className, draggable } = useDragAndDrop(canvas, field, '2');
  const { setCurrentRow, setCurrentRowIndex, setLyingRow, setLyingRowIndex } =
    useSwapRows(setCanvas, canvas, currentRowId, field);
  const disableCheck = disableChecker(className, '2');

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
      id="2"
    >
      <OperationButton operation="/" disableCheck={disableCheck} />
      <OperationButton operation="*" disableCheck={disableCheck} />
      <OperationButton operation="-" disableCheck={disableCheck} />
      <OperationButton operation="+" disableCheck={disableCheck} />
    </div>
  );
}

export default Row2;
