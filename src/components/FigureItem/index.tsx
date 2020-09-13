import React, { FC, CSSProperties, memo } from 'react';

import { useStyles } from './styles';

import { Coordinates } from 'libs/helpers/movement';

interface IFigureItemProps {
  coordinates: Coordinates;
  backgroundColor: string;
}

const FigureItem: FC<IFigureItemProps> = ({ coordinates, backgroundColor }) => {
  const classes = useStyles();

  const style: CSSProperties = {
    top: coordinates[0],
    left: coordinates[1],
    backgroundColor,
  };

  return <div className={classes.cell} style={style} />;
};

export default memo(FigureItem);
