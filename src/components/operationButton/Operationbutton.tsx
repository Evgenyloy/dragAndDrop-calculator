import { useAppDispatch } from '../../hooks/hooks';
import { addOperation } from '../../slice/slice';
import { IOperationButtonProps } from '../../types/types';

export default function OperationButton({ operation }: IOperationButtonProps) {
  const dispatch = useAppDispatch();
  return (
    <button
      className="calculator__operation-button"
      onClick={() => dispatch(addOperation(operation))}
    >
      {operation}
    </button>
  );
}
