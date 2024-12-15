import DigitButton from '../digitButton/DigitButton';
import {
  setCurrentRowId,
  setCurrentRowOrder,
} from '../../slice/dragAndDropSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { IRowProps } from './Row1';
import {
  handleDragEnd,
  handleDragLeave,
  handleDragOver,
  handleDragStart,
  handleDrop,
} from '../../utils/dragAndDropUtils';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';
import { useState } from 'react';

function Row3({ canvas, setCanvas, data, field }: IRowProps) {
  const dispatch = useAppDispatch();
  const currentRowId = useAppSelector(
    (state) => state.dragAndDrop.currentRowId
  );
  const CurrentRowOrder = useAppSelector(
    (state) => state.dragAndDrop.CurrentRowOrder
  );

  const { className, disable, draggable } = useDragAndDrop(canvas, field, '3');
  const [dragOverClass, setDragOverClass] = useState('');
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
      id="3"
      data-order={data}
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
