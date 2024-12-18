import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import { addOperation, setRunTime } from '../../slice/calculatorSlice';
import { IOperationButtonProps, IRow } from '../../types/types';

export default function OperationButton({
  operation,
  disableCheck,
}: IOperationButtonProps) {
  const dispatch = useAppDispatch();
  const runTime = useAppSelector((state) => state.calculator.runTime);
  return (
    <div
      className={
        runTime
          ? 'calculator__operation-button'
          : 'calculator__operation-button hover-btns-off'
      }
      onClick={() =>
        disableCheck ? undefined : dispatch(addOperation(operation as string))
      }
    >
      {operation}
    </div>
  );
}
