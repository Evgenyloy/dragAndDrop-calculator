import DigitButton from '../digitButton/DigitButton';
import {
  setCurrentRowId,
  setCurrentRowOrder,
} from '../../slice/dragAndDropSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { IRowProps } from './Row1';
import {
  handleDragOver,
  handleDragStart,
  handleDrop,
} from '../../utils/dragAndDropUtils';

function Row3({ canvas, setCanvas, data, field }: IRowProps) {
  const dispatch = useAppDispatch();
  const currentRowId = useAppSelector(
    (state) => state.dragAndDrop.currentRowId
  );
  const CurrentRowOrder = useAppSelector(
    (state) => state.dragAndDrop.CurrentRowOrder
  );

  return (
    <div
      className="calculator__row calculator__row-3"
      draggable
      onDragStart={(e) => handleDragStart(e, dispatch)}
      onDragLeave={(e) => e}
      onDragEnd={(e) => e}
      onDragOver={handleDragOver}
      onDrop={(e) =>
        handleDrop(e, setCanvas, canvas, currentRowId, CurrentRowOrder)
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
