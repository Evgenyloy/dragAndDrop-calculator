import { IRowProps } from '../components/calculator/Row1';
import store from '../store/store';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface IOperationButtonProps {
  operation?: string;
}
export interface IDigitButtonProps {
  digit: string;
  clear?: boolean;
}

export interface IInitialState {
  currentRowId: string;
  CurrentRowOrder: string;
}

export interface IRow {
  id: string;
  row: ({ canvas, setCanvas }: IRowProps) => JSX.Element;
  order: string;
}
