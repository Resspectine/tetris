import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles(() =>
  createStyles({
    wrapper: {
      position: 'absolute',
      top: 0,
      left: 0,
    },
  })
);
