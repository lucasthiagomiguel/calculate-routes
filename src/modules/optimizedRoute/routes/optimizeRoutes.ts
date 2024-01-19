import { Router } from 'express';
import OptimizeRouteController  from '../controllers/optimizeRouteController';
import isAuthenticated from '@shared/middlewere/isAuthenticated';


const optimizeRoute = Router();
const optimizeRouteController = new OptimizeRouteController();


optimizeRoute.use(isAuthenticated);

optimizeRoute.get(
    '/:id',
    optimizeRouteController.show,
);



export default optimizeRoute;
