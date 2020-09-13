import React, { FC, memo } from 'react';
import { Typography, Modal, Button, Card } from '@material-ui/core';

import { useStyles } from './styles';

interface IFinishModalProps {
  points: number;
  isOpened: boolean;
  reset: () => void;
}

const FinishModal: FC<IFinishModalProps> = ({ isOpened, points, reset }) => {
  const classes = useStyles();

  return (
    <Modal open={!isOpened} className={classes.modal}>
      <Card className={classes.card}>
        <Typography className={classes.finishedTitle}>Finished</Typography>
        <Typography className={classes.points}>Score: {points}</Typography>
        <Button variant="contained" onClick={reset} color="primary">
          Reset
        </Button>
      </Card>
    </Modal>
  );
};

export default memo(FinishModal);
