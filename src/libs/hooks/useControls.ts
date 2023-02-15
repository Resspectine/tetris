import { useState, useEffect, useRef, useCallback } from 'react';

import { WIDTH_CENTER } from 'libs/helpers/constants';
import { move, Moves, rotate } from 'libs/helpers/movement';
import { Figure, isFiguresCollided, removeFilledLines } from 'libs/helpers/figures';
import { getRandomFigure } from 'libs/helpers/figures/helpers';

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

const getNewFigure = () =>
  getRandomFigure({
    offsetY: WIDTH_CENTER,
  });

export const useControls = (): IUseControls => {
  const [points, setPoints] = useState<number>(0);
  const [figures, setFigures] = useState<Figure[]>([]);
  const [isGameActive, setGameActive] = useState<boolean>(true);
  const [activeFigure, setActiveFigure] = useState<Figure>(getNewFigure);
  const intervalRef = useRef<number>();

  const resetGame = useCallback(() => {
    const newFigure = getNewFigure();

    setPoints(0);
    setFigures([]);

    setGameActive(true);

    setActiveFigure(newFigure);
  }, []);

  const stopFigure = () => {
    const newFigure = getNewFigure();

    if (isFiguresCollided(figures, newFigure)) {
      setGameActive(false);

      return;
    }

    clearInterval(intervalRef.current);
    setTimeout(() => {
      setActiveFigure(newFigure);
      setFigures(oldFigures => {
        const newFigures = oldFigures.concat(activeFigure);

        const { newStaticFigures, totalScore } = removeFilledLines(newFigures);

        setPoints(state => state + totalScore);

        return newStaticFigures;
      });
      setMoveInterval();
    }, 0);
  };

  const rotateRight = () => {
    if (!isGameActive) {
      return;
    }

    // activeFigure.rotateRight();
    setActiveFigure(rotate(activeFigure, figures, true));
  };

  const rotateLeft = () => {
    if (!isGameActive) {
      return;
    }

    setActiveFigure(rotate(activeFigure, figures));
  };

  const moveRight = () => {
    if (!isGameActive) {
      return;
    }

    setActiveFigure(move(activeFigure, figures, Moves.right));
  };

  const moveLeft = () => {
    if (!isGameActive) {
      return;
    }

    setActiveFigure(move(activeFigure, figures, Moves.left));
  };

  const ref = useRef<() => void>();

  const moveBottom = () => {
    if (!isGameActive) {
      return;
    }

    setActiveFigure(move(activeFigure, figures, Moves.bottom, stopFigure));
  };

  ref.current = () => {
    if (!isGameActive) {
      return;
    }

    setActiveFigure(move(activeFigure, figures, Moves.bottom, stopFigure));
  };

  const movements = {
    rotateRight,
    rotateLeft,
    moveRight,
    moveLeft,
  };

  const setMoveInterval = () => {
    intervalRef.current = setInterval(() => {
      ref.current?.();
    }, 1000) as unknown as number;
  };

  useEffect(() => {
    setMoveInterval();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  // useEffect(() => {}, [figures]);

  const fullFigures = figures.concat(activeFigure);

  return { figures: fullFigures, points, resetGame, isGameActive, moveBottom: moveBottom, ...movements };
};
