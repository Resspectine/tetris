import { Matrix } from 'ml-matrix';

import { PLAY_ZONE_WIDTH, PLAY_ZONE_HEIGHT, ITEM_SIZE } from '../constants';
import { Figure } from '../figures';

export const rotationRightMatrix = new Matrix([
  [0, -1],
  [1, 0],
]);

export const rotationLeftMatrix = new Matrix([
  [0, 1],
  [-1, 0],
]);

export enum Moves {
  right,
  left,
  bottom,
}

export enum Keys {
  ArrowRight = 'ArrowRight',
  ArrowLeft = 'ArrowLeft',
  ArrowDown = 'ArrowDown',
  r = 'r',
  R = 'R',
}

export type Coordinates = number[];

export type Movements = Record<Keys, () => void>;

export type Rotations = (key: string, movements: Movements) => () => void;

export const rotate = (figure: Figure, isClockwise?: boolean) => {
  const diff = new Matrix(figure.coordinates).add(new Matrix(figure.initialCoordinates).neg());
  const oldOffset = new Matrix(figure.coordinates).add(diff.clone().neg());
  const rotation = isClockwise ? rotationRightMatrix : rotationLeftMatrix;
  figure.setInitialCoords(new Matrix(figure.initialCoordinates).mmul(rotation).to2DArray());

  return new Matrix(oldOffset).mmul(rotation).add(diff).to2DArray();
};

export const move = (coords: Coordinates[], moveTo: Moves, isEndCallback?: () => void) => {
  const matrix = new Matrix(coords);

  switch (moveTo) {
    case Moves.right:
      if (matrix.maxColumn(1) + ITEM_SIZE >= PLAY_ZONE_WIDTH) {
        return coords;
      }

      return coords.map(([first, last]) => [first, last + ITEM_SIZE]);

    case Moves.left:
      if (matrix.minColumn(1) <= 0) {
        return coords;
      }

      return coords.map(([first, last]) => [first, last - ITEM_SIZE]);

    case Moves.bottom:
      if (matrix.maxColumn(0) + ITEM_SIZE >= PLAY_ZONE_HEIGHT) {
        if (isEndCallback) {
          isEndCallback();
        }

        return coords;
      }

      return coords.map(([first, last]) => [first + ITEM_SIZE, last]);

    default:
      return coords;
  }
};

export const moveTop = () => {
  console.log(
    new Matrix([
      [1, -220],
      [0, 1],
    ])
      .mmul(
        new Matrix([
          [220, 0],
          [220, ITEM_SIZE],
          [220, ITEM_SIZE * 2],
          [220 + ITEM_SIZE, ITEM_SIZE * 2],
        ])
      )
      .toString()
  );
};

export const isValidKey = (key: string): key is Keys => {
  if (key in Keys) {
    return true;
  }

  return false;
};

export const rotations: Rotations = (key, movements) => {
  if (!isValidKey(key)) {
    return () => {};
  }

  return movements[key];
};
