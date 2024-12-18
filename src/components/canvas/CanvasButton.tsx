import { useDragAndDrop } from '../../hooks/useDragAndDrop';
import { useOperation } from '../../hooks/useOperation';
import { setRunTime } from '../../slice/calculatorSlice';
import { ICanvasButtonProps } from '../../types/types';
import { handleButtonClick } from '../../utils/canvasUtils';

function CanvasButton({ canvas, setCanvas, id, text }: ICanvasButtonProps) {
  const { runTime, dispatch } = useOperation();
  const { setDisable, setDraggable } = useDragAndDrop(canvas);
  const className = runTime ? 'buttons__active' : undefined;

  return (
    <div
      className={`buttons__item buttons__item-${id} ` + className}
      id={`btn-${id}`}
      onClick={(e) =>
        handleButtonClick(
          e,
          setDisable,
          setDraggable,
          runTime,
          canvas,
          dispatch,
          setRunTime,
          setCanvas
        )
      }
    >
      <div className="buttons__button">{text}</div>
    </div>
  );
}

export default CanvasButton;
