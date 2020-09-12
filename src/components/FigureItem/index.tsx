import React, { FC, CSSProperties } from 'react';

import { useStyles } from './styles';

import { Coordinates } from 'libs/helpers/movement';

interface IFigureItemProps {
  coordinates: Coordinates;
}

const FigureItem: FC<IFigureItemProps> = ({ coordinates }) => {
  const classes = useStyles();

  const style: CSSProperties = {
    top: coordinates[0],
    left: coordinates[1],
  };

  return <div className={classes.cell} style={style} />;
};

export default FigureItem;
