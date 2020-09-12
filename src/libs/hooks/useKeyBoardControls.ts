import { useCallback, SetStateAction } from 'react';

import { Coordinates } from 'libs/helpers/movement';
import { Figure } from 'libs/helpers/figures';

interface IUseControls {
  rotateRight: () => void;
  rotateLeft: () => void;
  moveRight: () => void;
  moveLeft: () => void;
  moveBottom: () => void;
}

interface IUseKeyBoardControlsProps {
  activeFigure: Figure;
  setActiveFigureCoords: (state: SetStateAction<Coordinates[]>) => void;
  stopFigure: () => void;
}

export const useKeyBoardControls = ({
  activeFigure,
  setActiveFigureCoords,
  stopFigure,
}: IUseKeyBoardControlsProps): IUseControls => {
  const rotateRight = useCallback(() => {
    activeFigure.rotateRight();
    setActiveFigureCoords(activeFigure.getCoords());
  }, [activeFigure]);

  const rotateLeft = useCallback(() => {
    activeFigure.rotateLeft();
    setActiveFigureCoords(activeFigure.getCoords());
  }, [activeFigure]);

  const moveRight = useCallback(() => {
    activeFigure.moveRight();
    setActiveFigureCoords(activeFigure.getCoords());
  }, [activeFigure]);

  const moveLeft = useCallback(() => {
    activeFigure.moveLeft();
    setActiveFigureCoords(activeFigure.getCoords());
  }, [activeFigure]);

  const moveBottom = useCallback(() => {
    activeFigure.moveBottom(stopFigure);
    setActiveFigureCoords(activeFigure.getCoords());
  }, [activeFigure]);

  return { rotateLeft, rotateRight, moveLeft, moveRight, moveBottom };
};
