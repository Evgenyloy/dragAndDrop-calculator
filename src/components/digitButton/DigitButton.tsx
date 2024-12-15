import { useAppDispatch } from '../../hooks/hooks';
import { addDigit, allClear } from '../../slice/slice';
import { IDigitButtonProps } from '../../types/types';

export default function DigitButton({ digit, clear }: IDigitButtonProps) {
  const dispatch = useAppDispatch();
  return (
    <div
      className="calculator__digit-button"
      onClick={() => dispatch(clear ? allClear() : addDigit(digit))}
    >
      {digit}
    </div>
  );
}
