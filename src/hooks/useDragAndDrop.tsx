import { useEffect, useState } from 'react';
import { classNameSwitcher, dragSwitcher } from '../utils/dragAndDropUtils';
import { IRow } from '../types/types';

export function useDragAndDrop(
  canvas: IRow[] | undefined,
  field: string,
  id: string
) {
  const [disable, setDisable] = useState(true);
  const [draggable, setDraggable] = useState(true);
  const [className, setClassName] = useState(
    ` calculator__row calculator__row-${id}`
  );

  useEffect(() => {
    if (
      canvas?.some(
        (el) => el.id === document.querySelector(`[data-order='${id}']`)?.id
      )
    ) {
      setDisable(false);
    }
    classNameSwitcher(field, disable, setClassName, id);
    dragSwitcher(field, disable, setDraggable);
  }, [disable, canvas]);

  return { disable, draggable, className };
}
