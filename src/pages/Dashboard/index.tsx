import React, { FC, useMemo } from 'react';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

import { useStyles } from './styles';

import Item from 'components/Item';
import { useControls } from 'libs/hooks/useControls';
import { Keys, rotations, Movements } from 'libs/helpers/movement';
import FinishModal from 'components/FinishModal';

const Dashboard: FC = () => {
  const {
    figures,
    moveRight,
    moveLeft,
    moveBottom,
    rotateRight,
    rotateLeft,
    points,
    isGameActive,
    resetGame,
  } = useControls();
  const classes = useStyles();

  const movements: Movements = useMemo(
    () => ({
      [Keys.ArrowRight]: moveRight,
      [Keys.ArrowLeft]: moveLeft,
      [Keys.ArrowDown]: moveBottom,
      [Keys.R]: rotateLeft,
      [Keys.r]: rotateRight,
    }),
    [moveRight, moveLeft, moveBottom, rotateLeft, rotateRight]
  );

  window.onkeydown = (ev: KeyboardEvent) => {
    rotations(ev.key, movements)();
  };

  return (
    <div className={classes.wrapper}>
      <FinishModal isOpened={isGameActive} points={points} reset={resetGame} />
      <div className={classes.playZone}>
        {figures.map((figure, id) => (
          <Item key={id} coords={figure.getCoords()} color={figure.color} />
        ))}
      </div>
      <Box className={classes.pointsBox}>
        <Typography className={classes.points}>{points}</Typography>
      </Box>
    </div>
  );
};

export default Dashboard;
