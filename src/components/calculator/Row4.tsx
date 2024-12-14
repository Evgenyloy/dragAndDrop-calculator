import { compute } from '../../slice/slice';
import { useAppDispatch } from '../../hooks/hooks';
import { IRowProps } from '../../types/types';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';

function Row4({ refs }: IRowProps) {
  const dispatch = useAppDispatch();
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
  } = useDragAndDrop('4');
  return (
    <div
      className={`calculator__row-4 ${refs === 'drag' ? 'drag' : 'drop'}`}
      ref={refs === 'drag' ? dragNodeRef : sortNodeRef}
      style={refs === 'drag' ? style : sortStyle}
      {...(refs === 'drag' ? { ...attributes } : { ...sortAttributes })}
      {...(refs === 'drag' ? { ...listeners } : { ...sortListeners })}
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
