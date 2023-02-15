import { FC, memo } from 'react';

import { Coordinates } from 'libs/helpers/movement';
import FigureItem from 'components/FigureItem';

interface IItemProps {
  coords: Coordinates[];
  color: string;
}

const Item: FC<IItemProps> = ({ coords, color }) => {
  return (
    <div className="absolute left-0 top-0">
      {coords.map((coordinates, index) => (
        <FigureItem coordinates={coordinates} key={index} backgroundColor={color} />
      ))}
    </div>
  );
};

export default memo(Item);
