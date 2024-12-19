import { useDragAndDrop } from '../../hooks/useDragAndDrop';
import { useOperation } from '../../hooks/useOperation';
import { setRunTime } from '../../slice/calculatorSlice';
import { ICanvasButtonProps } from '../../types/types';
import { handleButtonClick } from '../../utils/canvasUtils';

function setClassName(runTime: boolean, id: string) {
  let className = 'buttons__item';
  if (!runTime && !id) return className;
  if (id === '1') {
    runTime
      ? (className = `buttons__item buttons__item-1 buttons__active`)
      : (className = `buttons__item buttons__item-1`);
  }
  if (id === '2') {
    runTime
      ? (className = `buttons__item buttons__item-2`)
      : (className = `buttons__item buttons__item-2 buttons__active`);
  }

  return className;
}

function CanvasButton({ canvas, setCanvas, id, text }: ICanvasButtonProps) {
  const { runTime, dispatch } = useOperation();
  const { setDisable, setDraggable } = useDragAndDrop(canvas);

  return (
    <div
      className={setClassName(runTime, id)}
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
