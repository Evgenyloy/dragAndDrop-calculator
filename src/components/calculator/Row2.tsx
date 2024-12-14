import OperationButton from '../operationButton/Operationbutton';
import { IRowProps } from '../../types/types';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';

function Row2({ refs }: IRowProps) {
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
  } = useDragAndDrop('2');
  return (
    <div
      className="calculator__row-2"
      ref={refs === 'drag' ? dragNodeRef : sortNodeRef}
      style={refs === 'drag' ? style : sortStyle}
      {...(refs === 'drag' ? { ...attributes } : { ...sortAttributes })}
      {...(refs === 'drag' ? { ...listeners } : { ...sortListeners })}
    >
      <OperationButton operation="/" />
      <OperationButton operation="*" />
      <OperationButton operation="-" />
      <OperationButton operation="+" />
    </div>
  );
}

export default Row2;
