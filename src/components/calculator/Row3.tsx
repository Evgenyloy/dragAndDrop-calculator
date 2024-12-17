import DigitButton from '../digitButton/DigitButton';
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

function Row3({ canvas, setCanvas, field }: IRowProps) {
  const dispatch = useAppDispatch();
  const currentRowId = useAppSelector(
    (state) => state.dragAndDrop.currentRowId
  );
  const runTime = useAppSelector((state) => state.calculator.runTime);
  const { className, draggable } = useDragAndDrop(canvas, field, '3');
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
      id="3"
    >
      <DigitButton digit="7" />
      <DigitButton digit="8" />
      <DigitButton digit="9" />
      <DigitButton digit="4" />
      <DigitButton digit="5" />
      <DigitButton digit="6" />
      <DigitButton digit="1" />
      <DigitButton digit="2" />
      <DigitButton digit="3" />
      <DigitButton digit="0" />
      <DigitButton digit="." />
      <DigitButton digit="AC" clear />
    </div>
  );
}

export default Row3;
