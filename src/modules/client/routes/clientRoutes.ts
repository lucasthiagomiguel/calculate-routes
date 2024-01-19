import { Router } from 'express';
import CLientController  from '../controllers/CLientController';
import isAuthenticated from '@shared/middlewere/isAuthenticated';


const clientRouter = Router();
const clientController = new CLientController();


clientRouter.use(isAuthenticated);
clientRouter.post(
  '/',
  clientController.create,
);

clientRouter.get(
    '/',
    clientController.list,
);

clientRouter.get(
    '/:id',
    clientController.show,
);
clientRouter.put(
    '/:id',
    clientController.update,
);
clientRouter.delete(
    '/:id',
    clientController.delete,
);



export default clientRouter;
