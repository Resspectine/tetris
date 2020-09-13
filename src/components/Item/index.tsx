import React, { FC, memo } from 'react';

import { useStyles } from './styles';

import { Coordinates } from 'libs/helpers/movement';
import FigureItem from 'components/FigureItem';

interface IItemProps {
  coords: Coordinates[];
  color: string;
}

const Item: FC<IItemProps> = ({ coords, color }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      {coords.map((coordinates, index) => (
        <FigureItem coordinates={coordinates} key={index} backgroundColor={color} />
      ))}
    </div>
  );
};

export default memo(Item);
