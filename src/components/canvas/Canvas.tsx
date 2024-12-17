import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { IoConstructOutline, IoImages } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import React from 'react';
import { IRow } from '../../types/types';
import { rowCalculatorItems } from '../../slice/dragAndDropSlice';
import { setRunTime } from '../../slice/slice';
import './canvas.scss';

interface ICanvasProps {
  canvas: IRow[];
  setCanvas: React.Dispatch<React.SetStateAction<IRow[]>>;
}

function Canvas({ canvas, setCanvas }: ICanvasProps) {
  const currentRowId = useAppSelector(
    (state) => state.dragAndDrop.currentRowId
  );
  const runTime = useAppSelector((state) => state.calculator.runTime);
  const dispatch = useAppDispatch();
  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    if ((e.target as HTMLElement)?.closest('.calculator__row')) return;
    if (canvas.length > 4) return;
    if (canvas.some((e) => e?.id === currentRowId)) return;

    if (currentRowId) {
      const newRow = rowCalculatorItems.filter((e) => {
        return e.id === currentRowId;
      });
      setCanvas((oldRow) => [...oldRow, ...newRow]);
    }
  }

  return (
    <div
      className={
        currentRowId && canvas.length === 0 ? 'field drag-start' : 'field'
      }
    >
      <div className="buttons">
        <div
          className={
            runTime
              ? 'buttons__item buttons__item-1 buttons__active'
              : 'buttons__item buttons__item-1'
          }
          onClick={() => dispatch(setRunTime(true))}
        >
          <MdOutlineRemoveRedEye className="buttons__icon" />
          <div className="buttons__button">Runtime</div>
        </div>
        <div
          className={
            runTime
              ? 'buttons__item buttons__item-2'
              : 'buttons__item buttons__item-2 buttons__active'
          }
          onClick={() => dispatch(setRunTime(false))}
        >
          <IoConstructOutline className="buttons__icon" />
          <div className="buttons__button">Constructor</div>
        </div>
      </div>

      <div
        className="canvas"
        id="canvas"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        {canvas.map((item) => {
          if (!item) return;
          return (
            <React.Fragment key={item.id}>
              <item.row
                canvas={canvas}
                setCanvas={setCanvas}
                field={'canvas'}
              />
            </React.Fragment>
          );
        })}
        {!canvas.length && (
          <div className="canvas__inner">
            <IoImages className="canvas__icon" />
            <span className="canvas__text-1">Перетащите сюда</span>
            <span className="canvas__text-2">
              любой элемент <br /> из левой панели
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Canvas;
