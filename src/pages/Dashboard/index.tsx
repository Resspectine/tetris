import { FC } from 'react';

import Item from 'components/Item';
import { useControls } from 'libs/hooks/useControls';
import { Keys, rotations, Movements } from 'libs/helpers/movement';
import FinishModal from 'components/FinishModal';
import { PLAY_ZONE_HEIGHT, PLAY_ZONE_WIDTH } from 'libs/helpers/constants';

const Dashboard: FC = () => {
  const { figures, moveRight, moveLeft, moveBottom, rotateRight, rotateLeft, score, isGameActive, resetGame } =
    useControls();

  window.onkeydown = (ev: KeyboardEvent) => {
    const movements: Movements = {
      [Keys.ArrowRight]: moveRight,
      [Keys.ArrowLeft]: moveLeft,
      [Keys.ArrowDown]: moveBottom.current,
      [Keys.R]: rotateLeft,
      [Keys.r]: rotateRight,
    };
    rotations(ev.key, movements)();
  };

  return (
    <div className="absolute flex top-0 left-0 w-screen h-screen">
      <FinishModal isOpened={!isGameActive} points={score} reset={resetGame} />
      <div
        className="overflow-hidden relative bg-gray-300"
        style={{
          top: `calc((100% - ${PLAY_ZONE_HEIGHT}px) / 2)`,
          left: `calc((100% - ${PLAY_ZONE_WIDTH}px) / 2)`,
          width: PLAY_ZONE_WIDTH,
          height: PLAY_ZONE_HEIGHT,
        }}
      >
        {figures.map((figure, id) => (
          <Item key={id} coords={figure.coordinates} color={figure.color} />
        ))}
      </div>
      <div className="absolute left-1/2 translate-x-1/2">
        <p className="caret-blue-500 text-3xl">{score}</p>
      </div>
    </div>
  );
};

export default Dashboard;
