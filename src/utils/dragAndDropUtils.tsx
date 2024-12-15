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

export function handleDragOver(
  e: React.DragEvent<HTMLDivElement>,
  field: string,
  id: string,
  setDragOverClass: React.Dispatch<React.SetStateAction<string>>
) {
  if (!(e.target instanceof HTMLElement)) return;
  e.preventDefault();
  if (field === 'canvas') {
    if (!e.currentTarget.contains(e.relatedTarget as HTMLElement)) {
      setDragOverClass('drop-over');
    }
  }
}

export function handleDrop(
  e: React.DragEvent<HTMLDivElement>,
  setCanvas: React.Dispatch<React.SetStateAction<IRow[]>> | undefined,
  canvas: IRow[] | undefined,
  currentRowId: string,
  CurrentRowOrder: string,
  setDragOverClass: React.Dispatch<React.SetStateAction<string>>
) {
  if (!(e.target instanceof HTMLElement)) return;
  e.preventDefault();

  /*   function swap(arr, a, b) {
    arr[a] = arr.splice(b, 1, arr[a])[0];
  } */

  if (setCanvas && canvas) {
    setCanvas(
      canvas?.map((row) => {
        if (!(e.target instanceof HTMLElement)) return row;
        //-------------------------------------------------------------------------------------------------------------

        if (
          row.id === e.target.closest('.calculator__row')?.id &&
          canvas.some((e) => e.id === currentRowId)
        ) {
          return {
            ...row,
            order: CurrentRowOrder,
          };
        }
        if (row.id === currentRowId) {
          console.log(e.target?.closest('.calculator__row'));

          return {
            ...row,
            order: (e.target?.closest('.calculator__row') as HTMLElement)
              ?.dataset?.order as string,
          };
        }
        return row;
      })
    );
  }
  if (!e.currentTarget.contains(e.relatedTarget as HTMLElement)) {
    setDragOverClass('');
  }
}

export function handleDragEnd(
  event: React.DragEvent<HTMLDivElement>,
  field: string,
  setDragOverClass: React.Dispatch<React.SetStateAction<string>>
) {
  if (!(event.target instanceof HTMLElement)) return;

  if (!event.currentTarget.contains(event.relatedTarget as HTMLElement)) {
    setDragOverClass('');
  }
}

export function handleDragLeave(
  event: React.DragEvent<HTMLDivElement>,
  field: string,
  setDragOverClass: React.Dispatch<React.SetStateAction<string>>
) {
  if (!(event.target instanceof HTMLElement)) return;

  if (!event.currentTarget.contains(event.relatedTarget as HTMLElement)) {
    setDragOverClass('');
  }
}

export function classNameSwitcher(
  field: string,
  disable: boolean,
  setClassName: React.Dispatch<React.SetStateAction<string>>,
  id: string
) {
  if (field === 'calculator' && disable) {
    setClassName(`calculator__row calculator__row-${id}`);
  }
  if (field === 'calculator' && disable === false) {
    setClassName(`calculator__row calculator__row-${id}  disable`);
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
