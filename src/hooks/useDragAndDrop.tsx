import { useDraggable } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export const useDragAndDrop = (id: string) => {
  const {
    setNodeRef: dragNodeRef,
    attributes,
    listeners,
    transform,
  } = useDraggable({
    id: id,
  });

  const {
    setNodeRef: sortNodeRef,
    attributes: sortAttributes,
    listeners: sortListeners,
    transform: sortTransform,
    transition,
  } = useSortable({
    id: id,
  });

  const sortStyle2 = {
    '--translate-x': sortTransform ? sortTransform.x : 0,
    '--translate-y': sortTransform ? sortTransform.y : 50,
    '--transition': transition,
  };

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  const sortStyle = {
    transform: CSS.Transform.toString(
      sortTransform && { ...sortTransform, scaleY: 1 }
    ),
    transition,
  };

  return {
    dragNodeRef,
    sortNodeRef,
    attributes,
    sortAttributes,
    listeners,
    sortListeners,
    style,
    sortStyle,
    sortStyle2,
  };
};
