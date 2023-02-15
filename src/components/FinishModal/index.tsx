import { FC, memo } from 'react';

interface IFinishModalProps {
  points: number;
  isOpened: boolean;
  reset: () => void;
}

const FinishModal: FC<IFinishModalProps> = ({ isOpened, points, reset }) => {
  if (!isOpened) {
    return null;
  }

  return (
    <div className="flex justify-center items-center absolute z-10 bg-gray-400/70 top-0 left-0 right-0 bottom-0">
      <div className="bg-white p-40 rounded-xl text-center">
        <p className="text-4xl mb-8">Finished</p>
        <p className="text-blue-500 text-2xl mb-4">Score: {points}</p>
        <button
          onClick={reset}
          className="text-xl bg-blue-500 px-7 py-3 rounded-xl hover:bg-blue-600 active:bg-blue-700 text-white"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default memo(FinishModal);
