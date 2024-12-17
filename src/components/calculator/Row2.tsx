import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import { IRow, IRowProps } from '../../types/types';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';
import OperationButton from '../operationButton/Operationbutton';
import {
  handleDragEnd,
  handleDragLeave,
  handleDragOver,
  handleDragStart,
  handleDrop,
} from '../../utils/dragAndDropUtils';
import { useSwapRows } from '../../hooks/useSwapRows';

function Row2({ canvas, setCanvas, field }: IRowProps) {
  const dispatch = useAppDispatch();
  const currentRowId = useAppSelector(
    (state) => state.dragAndDrop.currentRowId
  );
  const runTime = useAppSelector((state) => state.calculator.runTime);
  const { className, draggable } = useDragAndDrop(canvas, field, '2');
  const [dragOverClass, setDragOverClass] = useState('');

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
      id="2"
    >
      <OperationButton operation="/" />
      <OperationButton operation="*" />
      <OperationButton operation="-" />
      <OperationButton operation="+" />
    </div>
  );
}

export default Row2;
