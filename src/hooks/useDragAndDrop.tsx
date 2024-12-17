import { useEffect, useState } from 'react';
import { IRow } from '../types/types';

export function useDragAndDrop(
  canvas: IRow[] | undefined,
  field: string,
  id?: string
) {
  const [disable, setDisable] = useState(true);
  const [draggable, setDraggable] = useState(true);
  const [className, setClassName] = useState(
    ` calculator__row calculator__row-${id}`
  );

  useEffect(() => {
    if (canvas?.some((el) => el.id === id)) {
      setDisable(false);
    }
    classNameSwitcher(field, disable, setClassName, id as string);
    dragSwitcher(field, disable, setDraggable);
  }, [disable, canvas]);

  return { disable, draggable, className };
}

function classNameSwitcher(
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
