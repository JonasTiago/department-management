import { Router } from 'express';
import { createPosition } from '../controllers/positions-controller';

const positionRouter = Router();
positionRouter.post('/positions', createPosition);
/*positionRouter.get('/positions/:id', getSpecifcPosition);
positionRouter.get('/positions', getPositions);*/

export default positionRouter;
