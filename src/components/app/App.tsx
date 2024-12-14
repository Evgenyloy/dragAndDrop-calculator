import Calculator from '../calculator/Calculator';
import Canvas from '../canvas/Canvas';
import { rowCalculatorItems } from '../../slice/dragAndDropSlice';
import './app.scss';
import { useState } from 'react';
import { IRow } from '../../types/types';
import { useAppSelector } from '../../hooks/hooks';

function App() {
  const currentRowId = useAppSelector(
    (state) => state.dragAndDrop.currentRowId
  );
  const [canvas, setCanvas] = useState<IRow[]>([]);
  return (
    <div className="app">
      <Calculator canvas={canvas} setCanvas={setCanvas} />
      <Canvas canvas={canvas} setCanvas={setCanvas} />
    </div>
  );
}

export default App;
