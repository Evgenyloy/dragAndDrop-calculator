import { compute } from '../../slice/slice';
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

function Row4({ canvas, setCanvas, data, field }: IRowProps) {
  const dispatch = useAppDispatch();
  const currentRowId = useAppSelector(
    (state) => state.dragAndDrop.currentRowId
  );
  const CurrentRowOrder = useAppSelector(
    (state) => state.dragAndDrop.CurrentRowOrder
  );

  const { className, disable, draggable } = useDragAndDrop(canvas, field, '4');
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
      id="4"
      data-order={data}
    >
      <div className="calculator__evaluate" onClick={() => dispatch(compute())}>
        =
      </div>
    </div>
  );
}

export default Row4;
