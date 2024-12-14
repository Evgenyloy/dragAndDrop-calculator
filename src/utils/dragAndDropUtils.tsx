import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { setCurrentRowId, setCurrentRowOrder } from '../slice/dragAndDropSlice';
import { AppDispatch, IRow } from '../types/types';

export function handleDragStart(
  e: React.DragEvent<HTMLDivElement>,
  dispatch: AppDispatch
) {
  if (!(e.target instanceof HTMLElement)) return;

  dispatch(setCurrentRowId(e.target.id));
  dispatch(
    setCurrentRowOrder(
      (e.target?.closest('.calculator__row') as HTMLElement)?.dataset.order
    )
  );
}

export function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
  if (!(e.target instanceof HTMLElement)) return;
  e.preventDefault();
}

export function handleDrop(
  e: React.DragEvent<HTMLDivElement>,
  setCanvas: React.Dispatch<React.SetStateAction<IRow[]>> | undefined,
  canvas: IRow[] | undefined,
  currentRowId: string,
  CurrentRowOrder: string
) {
  if (!(e.target instanceof HTMLElement)) return;
  e.preventDefault();

  if (setCanvas && canvas) {
    setCanvas(
      canvas?.map((c) => {
        if (!(e.target instanceof HTMLElement)) return c;
        if (c.id === e.target.closest('.calculator__row')?.id) {
          return {
            ...c,
            order: CurrentRowOrder,
          };
        }
        if (c.id === currentRowId) {
          return {
            ...c,
            order: (e.target?.closest('.calculator__row') as HTMLElement)
              ?.dataset?.order as string,
          };
        }
        return c;
      })
    );
  }
}

function handleDragEnd(event: React.DragEvent<HTMLDivElement>) {
  if (!(event.target instanceof HTMLElement)) return;
}

export function classNameSwitcher(
  field: string,
  disable: boolean,
  setClassName: React.Dispatch<React.SetStateAction<string>>
) {
  if (field === 'calculator' && disable) {
    setClassName('calculator__row calculator__row-1');
  }
  if (field === 'calculator' && disable === false) {
    setClassName('calculator__row calculator__row-1  disable');
  }
}

export function dragSwitcher(
  field: string,
  disable: boolean,
  setDraggable: React.Dispatch<React.SetStateAction<boolean>>
) {
  if (field === 'canvas') setDraggable(true);
  if (field === 'calculator' && disable) {
    setDraggable(true);
  }
  if (field === 'calculator' && !disable) {
    setDraggable(false);
  }
}
