import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { IoConstructOutline } from 'react-icons/io5';
import './canvas.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import React, { useState } from 'react';
import { IRow } from '../../types/types';
import {
  rowCalculatorItems,
  setCurrentRowId,
} from '../../slice/dragAndDropSlice';
// dragStart: пользователь начинает перетаскивание элемента.
// dragEnter: перетаскиваемый элемент достигает конечного элемента.
// dragOver: курсор мыши наведен на элемент при перетаскивании.
// dragLeave: курсор мыши покидает пределы перетаскиваемого элемента.
// drag: курсор двигается при перетаскивании.
// drop: срабатывает на элементе на который бросают (на меня что то уронили) он не считывает упавший элемент
// dragEnd: пользователь отпускает курсор мыши в процессе перетаскивания.
interface ICanvasProps {
  canvas: IRow[];
  setCanvas: React.Dispatch<React.SetStateAction<IRow[]>>;
}

function Canvas({ canvas, setCanvas }: ICanvasProps) {
  const currentRowId = useAppSelector(
    (state) => state.dragAndDrop.currentRowId
  );

  const dispatch = useAppDispatch();
  function handleDragStart(e: React.DragEvent<HTMLDivElement>) {
    if (!(e.target instanceof HTMLElement)) return;
  }

  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    if (canvas.length > 4) return;

    if (canvas.some((e) => e.id === currentRowId)) return;
    if (currentRowId) {
      const row = rowCalculatorItems.filter((e) => {
        return e.id === currentRowId;
      });
      if (row) {
        setCanvas((oldRow) => [...oldRow, ...row]);
      }
    }
  }

  const sortCards = (a: any, b: any) => {
    if (parseFloat(a.order) > parseFloat(b.order)) {
      return 1;
    } else {
      return -1;
    }
  };

  return (
    <div className="field">
      <div className="buttons">
        <div className="buttons__item buttons__item-1">
          <MdOutlineRemoveRedEye className="buttons__icon" />
          <div className="buttons__button">Runtime</div>
        </div>
        <div className="buttons__item buttons__item-2">
          <IoConstructOutline className="buttons__icon" />
          <div className="buttons__button">Constructor</div>
        </div>
      </div>

      <div
        className="canvas"
        id="canvas"
        /*   draggable */
        onDragStart={handleDragStart}
        onDragLeave={(e) => e}
        onDragEnd={(e) => e}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {canvas.sort(sortCards).map((item) => {
          return (
            <React.Fragment key={item.id}>
              <item.row
                canvas={canvas}
                data={item.order}
                setCanvas={setCanvas}
                field={'canvas'}
              />
            </React.Fragment>
          );
        })}

        {/*  <div className="canvas__inner" >
          <IoImages className="canvas__icon" />
          <span className="canvas__text-1">Перетащите сюда</span>
          <span className="canvas__text-2">
            любой элемент <br /> из левой панели
          </span>
        </div> */}
      </div>
    </div>
  );
}

export default Canvas;
