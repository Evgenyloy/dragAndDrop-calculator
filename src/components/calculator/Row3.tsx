import DigitButton from '../digitButton/DigitButton';
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

function Row3({ canvas, setCanvas, field }: IRowProps) {
  const [dragOverClass, setDragOverClass] = useState('');
  const [dragStartClass, setDragStartClass] = useState('');
  const { currentRowId, runTime, dispatch } = useOperation();
  const { className, draggable } = useDragAndDrop(canvas, field, '3');
  const { setCurrentRow, setCurrentRowIndex, setLyingRow, setLyingRowIndex } =
    useSwapRows(setCanvas, canvas, currentRowId, field);
  const disableCheck = disableChecker(className, '3');

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
      id="3"
    >
      <DigitButton digit="7" disableCheck={disableCheck} />
      <DigitButton digit="8" disableCheck={disableCheck} />
      <DigitButton digit="9" disableCheck={disableCheck} />
      <DigitButton digit="4" disableCheck={disableCheck} />
      <DigitButton digit="5" disableCheck={disableCheck} />
      <DigitButton digit="6" disableCheck={disableCheck} />
      <DigitButton digit="1" disableCheck={disableCheck} />
      <DigitButton digit="2" disableCheck={disableCheck} />
      <DigitButton digit="3" disableCheck={disableCheck} />
      <DigitButton digit="0" disableCheck={disableCheck} />
      <DigitButton digit="." disableCheck={disableCheck} />
      <DigitButton digit="AC" clear disableCheck={disableCheck} />
    </div>
  );
}

export default Row3;
