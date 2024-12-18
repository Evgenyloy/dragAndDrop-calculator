import { useState } from 'react';
import { IRowProps } from '../../types/types';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';
import { compute } from '../../slice/calculatorSlice';
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

function Row4({ canvas, setCanvas, field }: IRowProps) {
  const [dragOverClass, setDragOverClass] = useState('');
  const [dragStartClass, setDragStartClass] = useState('');
  const { currentRowId, runTime, dispatch } = useOperation();
  const { className, draggable } = useDragAndDrop(canvas, field, '4');
  const { setCurrentRow, setCurrentRowIndex, setLyingRow, setLyingRowIndex } =
    useSwapRows(setCanvas, canvas, currentRowId, field);
  const disableCheck = disableChecker(className, '4');

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
      id="4"
    >
      <div
        className={
          runTime
            ? 'calculator__evaluate'
            : 'calculator__evaluate hover-btns-off'
        }
        onClick={disableCheck ? undefined : () => dispatch(compute())}
      >
        =
      </div>
    </div>
  );
}

export default Row4;
