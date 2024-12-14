import { compute } from '../../slice/slice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { IRowProps } from './Row1';
import {
  handleDragOver,
  handleDragStart,
  handleDrop,
} from '../../utils/dragAndDropUtils';

function Row4({ canvas, setCanvas, data, field }: IRowProps) {
  const dispatch = useAppDispatch();
  const currentRowId = useAppSelector(
    (state) => state.dragAndDrop.currentRowId
  );
  const CurrentRowOrder = useAppSelector(
    (state) => state.dragAndDrop.CurrentRowOrder
  );

  return (
    <div
      className={`calculator__row calculator__row-4 `}
      draggable
      onDragStart={(e) => handleDragStart(e, dispatch)}
      onDragLeave={(e) => e}
      onDragEnd={(e) => e}
      onDragOver={handleDragOver}
      onDrop={(e) =>
        handleDrop(e, setCanvas, canvas, currentRowId, CurrentRowOrder)
      }
      id="4"
      data-order={data}
    >
      <button
        className="calculator__evaluate"
        onClick={() => dispatch(compute())}
      >
        =
      </button>
    </div>
  );
}

export default Row4;
