import { Figure } from '..';

import { ITEM_SIZE } from 'libs/helpers/constants';

export class I extends Figure {
  constructor(offsetY?: number, offsetX?: number) {
    super();

    this.initialCoordinates = [
      [0, 0],
      [0, ITEM_SIZE],
      [0, ITEM_SIZE * 2],
      [0, ITEM_SIZE * 3],
    ];

    this.coordinates = this.initialCoordinates.map(([x, y]) => [(offsetX || 0) + x, (offsetY || 0) + y]);
  }
}
