import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme =>
  createStyles({
    cell: {
      width: 38,
      height: 38,
      backgroundColor: theme.palette.primary.main,
      position: 'absolute',
      border: `1px solid ${theme.palette.secondary.main}`,
    },
  })
);
