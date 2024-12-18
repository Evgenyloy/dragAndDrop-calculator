import { rowCalculatorItems, setCurrentRowId } from '../slice/dragAndDropSlice';
import { AppDispatch, IRow } from '../types/types';

export function handleDragStart(
  e: React.DragEvent<HTMLDivElement>,
  dispatch: AppDispatch,
  setDragStartClass: React.Dispatch<React.SetStateAction<string>>
) {
  if (!(e.target instanceof HTMLElement)) return;
  dispatch(setCurrentRowId(e.target.id));
  setDragStartClass('drag-start');
}

export function handleDragOver(
  e: React.DragEvent<HTMLDivElement>,
  field: string,
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
  canvas: IRow[] | undefined,
  currentRowId: string,
  setDragOverClass: React.Dispatch<React.SetStateAction<string>>,
  setCurrentRow: React.Dispatch<React.SetStateAction<IRow | undefined>>,
  setCurrentRowIndex: React.Dispatch<React.SetStateAction<number | null>>,
  setLyingRow: React.Dispatch<React.SetStateAction<IRow | undefined>>,
  setLyingRowIndex: React.Dispatch<React.SetStateAction<number | null>>,
  disableCheck: boolean
) {
  if (disableCheck) return;
  if (!(e.target instanceof HTMLElement)) return;
  e.preventDefault();
  const rowOnCanvasId = (e.target?.closest('.calculator__row') as HTMLElement)
    ?.id;

  canvas?.forEach((row) => {
    if (row.id === rowOnCanvasId) {
      const currentIndex = canvas.findIndex((el) => {
        return el.id === rowOnCanvasId;
      });
      setCurrentRowIndex(currentIndex);
      setLyingRow(row);
    }
    if (row.id === currentRowId) {
      const dropIndex = canvas.findIndex((el) => {
        return el.id === currentRowId;
      });
      setLyingRowIndex(dropIndex);
    }
    if (row.id !== currentRowId) {
      const currentRow = rowCalculatorItems.filter((e) => {
        return e.id === currentRowId;
      });
      setCurrentRow(currentRow[0]);
    }
  });

  if (!e.currentTarget.contains(e.relatedTarget as HTMLElement)) {
    setDragOverClass('');
  }
}

export function handleDragEnd(
  event: React.DragEvent<HTMLDivElement>,
  setDragOverClass: React.Dispatch<React.SetStateAction<string>>,
  setDragStartClass: React.Dispatch<React.SetStateAction<string>>
) {
  if (!(event.target instanceof HTMLElement)) return;

  if (!event.currentTarget.contains(event.relatedTarget as HTMLElement)) {
    setDragOverClass('');
  }
  setDragStartClass('');
}

export function handleDragLeave(
  event: React.DragEvent<HTMLDivElement>,
  setDragOverClass: React.Dispatch<React.SetStateAction<string>>
) {
  if (!(event.target instanceof HTMLElement)) return;

  if (!event.currentTarget.contains(event.relatedTarget as HTMLElement)) {
    setDragOverClass('');
  }
}

export function handleDoubleClick(
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  setCanvas: (value: React.SetStateAction<IRow[]>) => void,
  canvas: IRow[],
  runTime: boolean
) {
  if (runTime) return;
  setCanvas(canvas.filter((item) => item.id !== e.currentTarget.id));
}

export function disableChecker(className: string, id: string) {
  return className === `calculator__row calculator__row-${id}  disable`;
}
