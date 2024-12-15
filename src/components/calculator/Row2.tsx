import OperationButton from '../operationButton/Operationbutton';
import {
  setCurrentRowOrder,
  setCurrentRowId,
} from '../../slice/dragAndDropSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { IRow } from '../../types/types';
import {
  handleDragEnd,
  handleDragLeave,
  handleDragOver,
  handleDragStart,
  handleDrop,
} from '../../utils/dragAndDropUtils';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';
import { useState } from 'react';
export interface IRowProps {
  canvas?: IRow[];
  data: string;
  setCanvas?: React.Dispatch<React.SetStateAction<IRow[]>>;
  field: string;
}

function Row2({ canvas, setCanvas, data, field }: IRowProps) {
  const dispatch = useAppDispatch();
  const currentRowId = useAppSelector(
    (state) => state.dragAndDrop.currentRowId
  );
  const CurrentRowOrder = useAppSelector(
    (state) => state.dragAndDrop.CurrentRowOrder
  );

  const { className, disable, draggable } = useDragAndDrop(canvas, field, '2');
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
      id="2"
      data-order={data}
    >
      <OperationButton operation="/" />
      <OperationButton operation="*" />
      <OperationButton operation="-" />
      <OperationButton operation="+" />
    </div>
  );
}

export default Row2;
