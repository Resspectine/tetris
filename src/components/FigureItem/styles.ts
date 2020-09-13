import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles(() =>
  createStyles({
    cell: {
      width: 38,
      height: 38,
      position: 'absolute',
      border: '1px solid #78909c',
    },
  })
);
