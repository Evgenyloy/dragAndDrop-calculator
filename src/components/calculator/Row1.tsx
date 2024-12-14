import { useAppSelector } from '../../hooks/hooks';
import { IRowProps } from '../../types/types';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';

const Row1 = ({ refs }: IRowProps) => {
  const currentRow = useAppSelector((state) => state.dragAndDrop.currentRow);
  const operation = useAppSelector((state) => state.calculator.operation);
  const currentOperand = useAppSelector(
    (state) => state.calculator.currentOperand
  );
  const previousOperand = useAppSelector(
    (state) => state.calculator.previousOperand
  );

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
  } = useDragAndDrop('1');

  return (
    <div
      className={`calculator__row-1 ${refs === 'drag' ? 'drag' : 'drop'}`}
      ref={refs === 'drag' ? dragNodeRef : sortNodeRef}
      style={refs === 'drag' ? style : sortStyle}
      {...(refs === 'drag' ? { ...attributes } : { ...sortAttributes })}
      {...(refs === 'drag' ? { ...listeners } : { ...sortListeners })}
    >
      <div className="calculator__output">
        <div className="calculator__previous-operand">
          {`${previousOperand} ${operation}`}
        </div>
        <div
          className={
            currentOperand.length > 14
              ? 'calculator__current-operand operand--small'
              : 'calculator__current-operand'
          }
        >
          {currentOperand}
        </div>
      </div>
    </div>
  );
};

export default Row1;
