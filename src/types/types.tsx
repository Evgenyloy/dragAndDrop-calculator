import store from '../store/store';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface IOperationButtonProps {
  operation?: string;
  disableCheck: boolean;
}
export interface IDigitButtonProps {
  digit: string;
  clear?: boolean;
  disableCheck: boolean;
}

export interface IInitialState {
  currentRowId: string;
}

export interface IRow {
  id: string;
  row: ({ canvas, setCanvas }: IRowProps) => JSX.Element;
  order: string;
}

export interface IRowProps {
  canvas: IRow[];
  setCanvas: React.Dispatch<React.SetStateAction<IRow[]>>;
  field: string;
}

export interface ICalculatorProps {
  canvas: IRow[];
  setCanvas: React.Dispatch<React.SetStateAction<IRow[]>>;
}

export interface ICanvasProps {
  canvas: IRow[];
  setCanvas: React.Dispatch<React.SetStateAction<IRow[]>>;
}

export interface ICanvasButtonProps {
  canvas: IRow[];
  setCanvas: React.Dispatch<React.SetStateAction<IRow[]>>;
  id: string;
  text: string;
}
