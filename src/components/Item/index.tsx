import React, { FC } from 'react';

import { useStyles } from './styles';

import { Coordinates } from 'libs/helpers/movement';
import FigureItem from 'components/FigureItem';

interface IItemProps {
  coords: Coordinates[];
}

const Item: FC<IItemProps> = ({ coords }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      {coords.map((coordinates, index) => (
        <FigureItem coordinates={coordinates} key={index} />
      ))}
    </div>
  );
};

export default Item;
