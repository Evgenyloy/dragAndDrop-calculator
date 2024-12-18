import { useAppDispatch, useAppSelector } from './useReduxHooks';

export function useOperation() {
  const dispatch = useAppDispatch();
  const operation = useAppSelector((state) => state.calculator.operation);
  const currentOperand = useAppSelector(
    (state) => state.calculator.currentOperand
  );
  const previousOperand = useAppSelector(
    (state) => state.calculator.previousOperand
  );
  const currentRowId = useAppSelector(
    (state) => state.dragAndDrop.currentRowId
  );
  const runTime = useAppSelector((state) => state.calculator.runTime);
  return {
    previousOperand,
    currentOperand,
    operation,
    currentRowId,
    runTime,
    dispatch,
  };
}
