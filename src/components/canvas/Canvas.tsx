import React from 'react';
import { IoImages } from 'react-icons/io5';
import { ICanvasProps } from '../../types/types';
import { useOperation } from '../../hooks/useOperation';
import { handleDrop } from '../../utils/canvasUtils';
import CanvasButton from './CanvasButton';
import './canvas.scss';

function Canvas({ canvas, setCanvas }: ICanvasProps) {
  const { currentRowId, runTime } = useOperation();

  return (
    <div
      className={
        currentRowId && canvas.length === 0 ? 'field drag-start' : 'field'
      }
    >
      <div className="buttons">
        <CanvasButton
          canvas={canvas}
          setCanvas={setCanvas}
          id="1"
          text="Runtime"
        />
        <CanvasButton
          canvas={canvas}
          setCanvas={setCanvas}
          id="2"
          text="Constructor"
        />
      </div>

      <div
        className="canvas"
        id="canvas"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleDrop(e, runTime, canvas, currentRowId, setCanvas)}
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
