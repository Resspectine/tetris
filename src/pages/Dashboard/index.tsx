import React, { FC, useMemo } from 'react';

import { useStyles } from './styles';

import Item from 'components/Item';
import { useControls } from 'libs/hooks/useControls';
import { Keys, rotations, Movements } from 'libs/helpers/movement';

const Dashboard: FC = () => {
  const { coords, moveRight, moveLeft, moveBottom, rotateRight, rotateLeft } = useControls();
  const classes = useStyles();

  const movements: Movements = useMemo(
    () => ({
      [Keys.ArrowRight]: moveRight,
      [Keys.ArrowLeft]: moveLeft,
      [Keys.ArrowDown]: moveBottom,
      [Keys.R]: rotateLeft,
      [Keys.r]: rotateRight,
    }),
    [moveRight, moveLeft, moveBottom]
  );

  window.onkeydown = (ev: KeyboardEvent) => {
    rotations(ev.key, movements)();
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.playZone}>
        {coords.map((figureCoords, id) => (
          <Item key={id} coords={figureCoords} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
