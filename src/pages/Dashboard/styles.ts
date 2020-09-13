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
      display: 'flex',
    },
    playZone: {
      overflow: 'hidden',
      width: PLAY_ZONE_WIDTH,
      height: PLAY_ZONE_HEIGHT,
      position: 'relative',
      top: `calc((100% - ${PLAY_ZONE_HEIGHT}px) / 2)`,
      left: `calc((100% - ${PLAY_ZONE_WIDTH}px) / 2)`,
      backgroundColor: '#e9e9e9',
    },
    points: {
      color: '#5ddef4',
      fontSize: 30,
    },
    modal: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    finishedTitle: {
      fontSize: 40,
    },
    pointsBox: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
    },
  })
);
