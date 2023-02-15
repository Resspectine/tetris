import { FC, CSSProperties, memo } from 'react';

import { Coordinates } from 'libs/helpers/movement';

interface IFigureItemProps {
  coordinates: Coordinates;
  backgroundColor: string;
}

const FigureItem: FC<IFigureItemProps> = ({ coordinates, backgroundColor }) => {
  const style: CSSProperties = {
    top: coordinates[0],
    left: coordinates[1],
    backgroundColor,
  };

  return <div className="absolute w-[38px] h-[38px] border-[1px] border-solid border-slate-100" style={style} />;
};

export default memo(FigureItem);
