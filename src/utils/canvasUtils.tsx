import { rowCalculatorItems } from '../slice/dragAndDropSlice';
import { AppDispatch, IRow } from '../types/types';
import { setRunTime } from '../slice/calculatorSlice';

export function handleDrop(
  e: React.DragEvent<HTMLDivElement>,
  runTime: boolean,
  canvas: IRow[],
  currentRowId: string,
  setCanvas: (value: React.SetStateAction<IRow[]>) => void
) {
  e.preventDefault();
  if (runTime) return;
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

export function handleButtonClick(
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  setDisable: React.Dispatch<React.SetStateAction<boolean>>,
  setDraggable: React.Dispatch<React.SetStateAction<boolean>>,
  runTime: boolean,
  canvas: IRow[],
  dispatch: AppDispatch,
  setRunTime: (arg0: boolean) => any,
  setCanvas: React.Dispatch<React.SetStateAction<IRow[]>>
) {
  if (!(e.target instanceof HTMLElement)) return;
  if (e.currentTarget.id === 'btn-1') {
    runTime ? null : dispatch(setRunTime(true));
  }
  if (e.currentTarget.id === 'btn-2') {
    runTime ? dispatch(setRunTime(false)) : null;
  }
  if (canvas.length > 0 && canvas.length < 4) {
    setDisable(true);
    setDraggable(true);
    setCanvas([]);
  }
}
