import { useState, useEffect, useRef } from 'react';

import { useKeyBoardControls } from './useKeyBoardControls';

import { WIDTH_CENTER } from 'libs/helpers/constants';
import { Coordinates } from 'libs/helpers/movement';
import { Figure } from 'libs/helpers/figures';
import { getRandomFigures } from 'libs/helpers/figures/helpers';

interface IUseControls {
  coords: Coordinates[][];
  rotateRight: () => void;
  rotateLeft: () => void;
  moveRight: () => void;
  moveLeft: () => void;
  moveBottom: () => void;
}

export const useControls = (): IUseControls => {
  const [figures, setFigures] = useState<Figure[]>([]);
  const [activeFigure, setActiveFigure] = useState<Figure>(new (getRandomFigures())(WIDTH_CENTER));
  const [activeFigureCoords, setActiveFigureCoords] = useState<Coordinates[]>(activeFigure.getCoords());
  const intervalRef = useRef<number>();

  const stopFigure = () => {
    const newFigure = new (getRandomFigures())(WIDTH_CENTER);

    clearInterval(intervalRef.current);
    setFigures(state => state.concat(activeFigure));
    setActiveFigure(newFigure);
    setActiveFigureCoords(newFigure.getCoords());
  };

  const movements = useKeyBoardControls({
    activeFigure,
    setActiveFigureCoords,
    stopFigure,
  });

  const setMoveInterval = () => {
    intervalRef.current = (setInterval(() => {
      movements.moveBottom();
    }, 1000) as unknown) as number;
  };

  useEffect(() => {
    setMoveInterval();
  }, [activeFigure]);

  const coords = figures.map(figure => figure.getCoords()).concat([activeFigureCoords]);

  return { coords, ...movements };
};
