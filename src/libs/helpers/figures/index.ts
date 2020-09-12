import { Coordinates, rotate, Moves, move } from 'libs/helpers/movement';

export class Figure {
  coordinates: Coordinates[] = [];

  initialCoordinates: Coordinates[] = [];

  getCoords() {
    return this.coordinates;
  }

  setInitialCoords(coords: Coordinates[]) {
    this.initialCoordinates = coords;
  }

  rotateRight = () => {
    this.coordinates = rotate(this, true);

    return this;
  };

  rotateLeft = () => {
    this.coordinates = rotate(this);

    return this;
  };

  moveRight = () => {
    this.coordinates = move(this.coordinates, Moves.right);

    return this;
  };

  moveLeft = () => {
    this.coordinates = move(this.coordinates, Moves.left);

    return this;
  };

  moveBottom = (isEndCallback: () => void) => {
    this.coordinates = move(this.coordinates, Moves.bottom, isEndCallback);

    return this;
  };
}
