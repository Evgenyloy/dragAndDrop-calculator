import { useEffect, useState } from 'react';
import { IRow } from '../types/types';

export function useSwapRows(
  setCanvas: React.Dispatch<React.SetStateAction<IRow[]>> | undefined,
  canvas: IRow[],
  currentRowId: string
) {
  const [currentRowIndex, setCurrentRowIndex] = useState<number | null>(null);
  const [lyingRowIndex, setLyingRowIndex] = useState<number | null>(null);
  const [currentRow, setCurrentRow] = useState<IRow>();
  const [lyingRow, setLyingRow] = useState<IRow>();

  function swapRows() {
    if (!setCanvas || !canvas) return;
    if (canvas.some((e: IRow) => e?.id === currentRowId)) {
      let newArrCanvas = canvas;

      let temporaryArr = newArrCanvas[currentRowIndex as number];
      newArrCanvas[currentRowIndex as number] =
        newArrCanvas[lyingRowIndex as number];
      newArrCanvas[lyingRowIndex as number] = temporaryArr;
      setCanvas([...newArrCanvas]);
    }
    if (!canvas.some((e: IRow) => e?.id === currentRowId)) {
      if (!currentRow || !lyingRow) return;
      setCanvas(canvas.toSpliced(currentRowIndex as number, 0, currentRow));
    }
  }

  useEffect(() => {
    swapRows();
  }, [lyingRowIndex, currentRowIndex, currentRow, lyingRow]);

  return {
    setCurrentRowIndex,
    setLyingRowIndex,
    setCurrentRow,
    setLyingRow,
  };
}
