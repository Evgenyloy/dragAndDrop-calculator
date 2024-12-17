import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import { IRow, IRowProps } from '../../types/types';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';
import { compute } from '../../slice/slice';
import {
  handleDragEnd,
  handleDragLeave,
  handleDragOver,
  handleDragStart,
  handleDrop,
} from '../../utils/dragAndDropUtils';
import { useSwapRows } from '../../hooks/useSwapRows';

function Row4({ canvas, setCanvas, field }: IRowProps) {
  const dispatch = useAppDispatch();
  const currentRowId = useAppSelector(
    (state) => state.dragAndDrop.currentRowId
  );
  const runTime = useAppSelector((state) => state.calculator.runTime);
  const { className, draggable } = useDragAndDrop(canvas, field, '4');
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
      id="4"
    >
      <div className="calculator__evaluate" onClick={() => dispatch(compute())}>
        =
      </div>
    </div>
  );
}

export default Row4;
