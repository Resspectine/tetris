import React, { FC, memo } from 'react';

interface IFinishModalProps {
  points: number;
  isOpened: boolean;
  reset: () => void;
}

const FinishModal: FC<IFinishModalProps> = ({ isOpened, points, reset }) => {
  return (
    <div open={!isOpened} className={classes.modal}>
      <Card className={classes.card}>
        <Typography className={classes.finishedTitle}>Finished</Typography>
        <Typography className={classes.points}>Score: {points}</Typography>
        <Button variant="contained" onClick={reset} color="primary">
          Reset
        </Button>
      </Card>
    </div>
  );
};

export default memo(FinishModal);
