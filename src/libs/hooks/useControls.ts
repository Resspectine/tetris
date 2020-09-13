import { useState, useEffect, useRef, useCallback } from 'react';

import { useKeyBoardControls } from './useKeyBoardControls';

import { WIDTH_CENTER } from 'libs/helpers/constants';
import { Coordinates } from 'libs/helpers/movement';
import { Figure } from 'libs/helpers/figures';
import { getRandomFigures } from 'libs/helpers/figures/helpers';

interface IUseControls {
  figures: Figure[];
  rotateRight: () => void;
  rotateLeft: () => void;
  moveRight: () => void;
  moveLeft: () => void;
  moveBottom: () => void;
  resetGame: () => void;
  points: number;
  isGameActive: boolean;
}

const getNewFigure = () => new (getRandomFigures())(WIDTH_CENTER);

export const useControls = (): IUseControls => {
  const [points, setPoints] = useState<number>(0);
  const [figures, setFigures] = useState<Figure[]>([]);
  const [isGameActive, setGameActive] = useState<boolean>(true);
  const [activeFigure, setActiveFigure] = useState<Figure>(getNewFigure);
  const [, setActiveFigureCoords] = useState<Coordinates[]>(activeFigure.getCoords());
  const intervalRef = useRef<number>();

  const resetGame = useCallback(() => {
    const newFigure = getNewFigure();

    setPoints(0);
    setFigures([]);
    setGameActive(true);

    setActiveFigure(newFigure);
    setActiveFigureCoords(newFigure.getCoords());
  }, []);

  const stopFigure = () => {
    const newFigure = getNewFigure();

    if (newFigure.isCollided()) {
      setGameActive(false);

      return;
    }

    clearInterval(intervalRef.current);
    setActiveFigure(newFigure);
    setActiveFigureCoords(newFigure.getCoords());
    setFigures(state => state.concat(activeFigure));
  };

  const movements = useKeyBoardControls({
    activeFigure,
    setActiveFigureCoords,
    stopFigure,
    isGameActive,
  });

  const setMoveInterval = () => {
    intervalRef.current = (setInterval(() => {
      movements.moveBottom();
    }, 1000) as unknown) as number;
  };

  useEffect(() => {
    setMoveInterval();
  }, [activeFigure]);

  useEffect(() => {
    Figure.allFigures = figures;

    setPoints(state => state + Figure.removeFilled());
  }, [figures]);

  const fullFigures = figures.concat(activeFigure);

  return { figures: fullFigures, points, resetGame, isGameActive, ...movements };
};
