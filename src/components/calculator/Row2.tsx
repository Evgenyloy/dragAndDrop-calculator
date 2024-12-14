import OperationButton from '../operationButton/Operationbutton';
import {
  setCurrentRowOrder,
  setCurrentRowId,
} from '../../slice/dragAndDropSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { IRow } from '../../types/types';
import {
  handleDragOver,
  handleDragStart,
  handleDrop,
} from '../../utils/dragAndDropUtils';
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

  return (
    <div
      className="calculator__row calculator__row-2"
      draggable
      onDragStart={(e) => handleDragStart(e, dispatch)}
      onDragLeave={(e) => e}
      onDragEnd={(e) => e}
      onDragOver={handleDragOver}
      onDrop={(e) =>
        handleDrop(e, setCanvas, canvas, currentRowId, CurrentRowOrder)
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
