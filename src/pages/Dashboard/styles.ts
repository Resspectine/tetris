import { makeStyles, createStyles } from '@material-ui/core';

import { PLAY_ZONE_WIDTH, PLAY_ZONE_HEIGHT } from 'libs/helpers/constants';

export const useStyles = makeStyles(() =>
  createStyles({
    wrapper: {
      width: '100vw',
      height: '100vh',
      position: 'absolute',
      top: 0,
      left: 0,
    },
    playZone: {
      width: PLAY_ZONE_WIDTH,
      height: PLAY_ZONE_HEIGHT,
      position: 'absolute',
      top: 0,
      left: `calc((100% - ${PLAY_ZONE_WIDTH}px) / 2)`,
      backgroundColor: '#e9e9e9',
    },
  })
);
