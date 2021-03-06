import { Figure } from '..';

import { ITEM_SIZE } from 'libs/helpers/constants';
import { Coordinates } from 'libs/helpers/movement';

export class I extends Figure {
  constructor(offsetY?: number | Coordinates[], offsetX?: number) {
    super();

    this.initialCoordinates =
      offsetY instanceof Array
        ? offsetY
        : [
            [0, -ITEM_SIZE * 2],
            [0, -ITEM_SIZE],
            [0, 0],
            [0, ITEM_SIZE],
          ];

    this.color = '#ff5f52';

    this.coordinates =
      offsetY instanceof Array
        ? offsetY
        : this.initialCoordinates.map(([x, y]) => [(offsetX || 0) + x, (offsetY || 0) + y]);
  }
}
