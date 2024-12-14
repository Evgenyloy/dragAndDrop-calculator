import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { IoConstructOutline } from 'react-icons/io5';
import './canvas.scss';
import { useAppSelector } from '../../hooks/hooks';
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useDroppable,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import React, { useState } from 'react';
import { IItems } from '../../types/types';
import {
  arrayMove,
  horizontalListSortingStrategy,
  rectSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

interface ICanvasProps {
  rows: IItems[];
  items: string[];
  handleDragEnd: (e: DragEndEvent) => void;
}

function Canvas({ rows, items, handleDragEnd }: ICanvasProps) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  const currentRow = useAppSelector((state) => state.dragAndDrop.currentRow);
  //isOver- показывает над контейнером ли сейчас перетаскиваемый элемент

  const { setNodeRef: dropNodeRef } = useDroppable({
    id: 'droppable',
  });
  const { setNodeRef } = useDroppable({
    id: 'drop',
  });

  function Droppable(props: any) {
    const { setNodeRef } = useDroppable({
      id: props.id,
    });

    return (
      <div className={`canvas__droppable-${props.id}`} ref={setNodeRef}>
        {props.children}
      </div>
    );
  }

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

      <div className="canvas" id="canvas" /* ref={dropNodeRef} */>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={(e) => handleDragEnd(e)}
        >
          {/* rectSortingStrategy , verticalListSortingStrategy , horizontalListSortingStrategy*/}
          <SortableContext strategy={verticalListSortingStrategy} items={items}>
            {rows.map((item) => {
              return (
                <Droppable id={item.id} key={item.id}>
                  <item.row refs="sort" />
                </Droppable>
              );
            })}
          </SortableContext>
        </DndContext>
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
