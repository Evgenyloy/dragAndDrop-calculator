import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import { addDigit, allClear } from '../../slice/calculatorSlice';
import { IDigitButtonProps } from '../../types/types';

export default function DigitButton({
  digit,
  clear,
  disableCheck,
}: IDigitButtonProps) {
  const dispatch = useAppDispatch();
  const runTime = useAppSelector((state) => state.calculator.runTime);
  return (
    <div
      className={
        runTime
          ? 'calculator__digit-button'
          : 'calculator__digit-button hover-btns-off'
      }
      onClick={() =>
        disableCheck
          ? undefined
          : dispatch(clear ? allClear() : addDigit(digit))
      }
    >
      {digit}
    </div>
  );
}
