import { Figure } from '..';

import { ITEM_SIZE } from 'libs/helpers/constants';

export class T extends Figure {
  constructor(offsetY?: number, offsetX?: number) {
    super();

    this.initialCoordinates = [
      [0, 0],
      [0, ITEM_SIZE],
      [ITEM_SIZE, ITEM_SIZE],
      [0, ITEM_SIZE * 2],
    ];

    this.coordinates = this.initialCoordinates.map(([x, y]) => [(offsetX || 0) + x, (offsetY || 0) + y]);
  }
}
