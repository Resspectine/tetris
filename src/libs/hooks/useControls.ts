import { useState, useEffect, useRef, useCallback, MutableRefObject } from 'react';

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
  moveBottom: MutableRefObject<() => void>;
  resetGame: () => void;
  score: number;
  isGameActive: boolean;
}

const getNewFigure = () =>
  getRandomFigure({
    offsetY: WIDTH_CENTER,
  });

export const useControls = (): IUseControls => {
  const [score, setScore] = useState<number>(0);
  const [staticFigures, setStaticFigures] = useState<Figure[]>([]);
  const [isGameActive, setGameActive] = useState<boolean>(true);
  const [activeFigure, setActiveFigure] = useState<Figure>(getNewFigure);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  const resetGame = useCallback(() => {
    const newFigure = getNewFigure();

    setScore(0);
    setStaticFigures([]);

    setGameActive(true);

    setActiveFigure(newFigure);
  }, []);

  const stopFigure = () => {
    const newFigure = getNewFigure();

    if (isFiguresCollided(staticFigures, newFigure)) {
      setGameActive(false);

      return;
    }

    clearInterval(intervalRef.current);
    setTimeout(() => {
      setActiveFigure(newFigure);
      setStaticFigures(oldFigures => {
        const newFigures = oldFigures.concat(activeFigure);

        const { newStaticFigures, totalScore } = removeFilledLines(newFigures);

        setScore(state => state + totalScore);

        return newStaticFigures;
      });
      setMoveInterval();
    }, 0);
  };

  const rotateRight = () => {
    if (!isGameActive) {
      return;
    }

    setActiveFigure(rotate(activeFigure, staticFigures, true));
  };

  const rotateLeft = () => {
    if (!isGameActive) {
      return;
    }

    setActiveFigure(rotate(activeFigure, staticFigures));
  };

  const moveRight = () => {
    if (!isGameActive) {
      return;
    }

    setActiveFigure(move(activeFigure, staticFigures, Moves.right));
  };

  const moveLeft = () => {
    if (!isGameActive) {
      return;
    }

    setActiveFigure(move(activeFigure, staticFigures, Moves.left));
  };

  const moveBottomRef = useRef<() => void>(() => {});

  moveBottomRef.current = () => {
    if (!isGameActive) {
      return;
    }

    setActiveFigure(move(activeFigure, staticFigures, Moves.bottom, stopFigure));
  };

  const movements = {
    rotateRight,
    rotateLeft,
    moveRight,
    moveLeft,
  };

  const setMoveInterval = () => {
    intervalRef.current = setInterval(() => {
      moveBottomRef.current();
    }, 1000);
  };

  useEffect(() => {
    setMoveInterval();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const fullFigures = staticFigures.concat(activeFigure);

  return { figures: fullFigures, score: score, resetGame, isGameActive, moveBottom: moveBottomRef, ...movements };
};
