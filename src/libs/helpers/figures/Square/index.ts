import { Figure } from '..';

import { ITEM_SIZE } from 'libs/helpers/constants';
import { Coordinates } from 'libs/helpers/movement';

export class Square extends Figure {
  constructor(offsetY?: number | Coordinates[], offsetX?: number) {
    super();

    this.initialCoordinates =
      offsetY instanceof Array
        ? offsetY
        : [
            [0, -ITEM_SIZE],
            [0, 0],
            [ITEM_SIZE, -ITEM_SIZE],
            [ITEM_SIZE, 0],
          ];

    this.color = '#5f5fc4';

    this.coordinates =
      offsetY instanceof Array
        ? offsetY
        : this.initialCoordinates.map(([x, y]) => [(offsetX || 0) + x, (offsetY || 0) + y]);
  }
}
