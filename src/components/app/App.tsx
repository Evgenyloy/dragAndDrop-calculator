import Calculator from '../calculator/Calculator';
import Canvas from '../canvas/Canvas';
import { useState } from 'react';
import { IRow } from '../../types/types';
import Tips from '../tips/Tips';
import './app.scss';

function App() {
  const [canvas, setCanvas] = useState<IRow[]>([]);

  return (
    <div className="app">
      <Calculator canvas={canvas} setCanvas={setCanvas} />
      <Canvas canvas={canvas} setCanvas={setCanvas} />
      <Tips />
    </div>
  );
}

export default App;
