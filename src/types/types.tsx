import { DraggableAttributes } from '@dnd-kit/core';
import store from '../store/store';
import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';

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
  currentBoard: [];
  currentRow: string;
}

export interface IItems {
  id: string;
  row: ({ refs, style, attributes, listeners }: IRowProps) => JSX.Element;
  order: number;
}

export interface IRowProps {
  refs?: string;
  style?: {
    transform?: string | undefined;
    transition?: string | undefined;
    sortStyle2?: {
      '--translate-x': number;
      '--translate-y': number;
      '--transition': string | undefined;
    };
  };
  attributes?: DraggableAttributes;
  listeners?: SyntheticListenerMap | undefined;
}
