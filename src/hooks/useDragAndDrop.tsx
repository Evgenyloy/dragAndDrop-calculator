import { useEffect, useState } from 'react';
import { IRow } from '../types/types';
import { useAppSelector } from './useReduxHooks';

export function useDragAndDrop(
  canvas: IRow[] | undefined,
  field?: string,
  id?: string
) {
  const [disable, setDisable] = useState(true);
  const [draggable, setDraggable] = useState(true);
  const [className, setClassName] = useState(
    ` calculator__row calculator__row-${id}`
  );
  const runTime = useAppSelector((state) => state.calculator.runTime);
  useEffect(() => {
    if (canvas?.some((el) => el.id === id)) {
      setDisable(false);
    } else {
      setDisable(true);
    }

    classNameSwitcher(field as string, disable, setClassName, id as string);
    dragSwitcher(field as string, disable, setDraggable);
  }, [disable, draggable, canvas, className, runTime]);

  return { disable, draggable, className, setDisable, setDraggable };
}

function classNameSwitcher(
  field: string,
  disable: boolean,
  setClassName: React.Dispatch<React.SetStateAction<string>>,
  id: string
) {
  if (field === 'calculator' && disable === true) {
    setClassName(`calculator__row calculator__row-${id}`);
  }
  if (field === 'calculator' && disable === false) {
    setClassName(`calculator__row calculator__row-${id}  disable`);
  }
}

function dragSwitcher(
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
