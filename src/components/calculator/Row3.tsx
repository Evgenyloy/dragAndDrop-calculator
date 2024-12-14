import DigitButton from '../digitButton/DigitButton';
import { IRowProps } from '../../types/types';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';

function Row3({ refs }: IRowProps) {
  const {
    dragNodeRef,
    sortNodeRef,
    attributes,
    sortAttributes,
    listeners,
    sortListeners,
    style,
    sortStyle,
    sortStyle2,
  } = useDragAndDrop('3');
  return (
    <div
      className="calculator__row-3"
      ref={refs === 'drag' ? dragNodeRef : sortNodeRef}
      style={refs === 'drag' ? style : sortStyle}
      {...(refs === 'drag' ? { ...attributes } : { ...sortAttributes })}
      {...(refs === 'drag' ? { ...listeners } : { ...sortListeners })}
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
