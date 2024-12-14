import Calculator from '../calculator/Calculator';
import Canvas from '../canvas/Canvas';
import { rowCalculatorItems } from '../../slice/dragAndDropSlice';
import './app.scss';
import { useState } from 'react';
import { IItems } from '../../types/types';
import {
  closestCenter,
  closestCorners,
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  pointerWithin,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';

function App() {
  const [currentRow, setCurrentRow] = useState('');
  const [rows, setRows] = useState<IItems[]>([]);
  const [items, setItems] = useState(['1', '2', '3', '4']);

  function handleDragEnd(e: DragEndEvent) {
    if (rows.length > 4) return;

    if (e.active.id === currentRow) {
      const row = rowCalculatorItems.filter((e) => {
        if (rows.some((e) => e.id === currentRow)) return;
        return e.id === currentRow;
      });
      setRows((el) => [...el, ...row]);
    }

    const { active, over } = e;

    if (active.id !== over?.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active?.id as string);
        const newIndex = items.indexOf(over?.id as string);

        console.log(newIndex, oldIndex);
        return arrayMove(items, newIndex, oldIndex);
      });
      setRows((rows) => rows.sort(sortRows));
    }
  }

  function handleDragOver(e: DragOverEvent) {
    // console.log('over', e);
  }

  function handleDragStart(e: DragStartEvent) {
    // console.log('start', e.active.id);
    setCurrentRow(e.active.id as string);
  }

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  const sortRows = (a: any, b: any) => {
    return items.indexOf(a.id) - items.indexOf(b.id);
  };
  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={(e) => handleDragEnd(e)}
      onDragOver={(e) => handleDragOver(e)}
      onDragStart={(e) => handleDragStart(e)}
      sensors={sensors}
    >
      <div className="app">
        <Calculator />
        <Canvas rows={rows} items={items} handleDragEnd={handleDragEnd} />
      </div>
    </DndContext>
  );
}

export default App;
