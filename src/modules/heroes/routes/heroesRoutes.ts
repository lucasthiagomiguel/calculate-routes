import { Router } from 'express';
import HeroesController  from '../controllers/HeroesController';


const heroesRouter = Router();
const heroesController = new HeroesController();



heroesRouter.post(
  '/',
  heroesController.create,
);

heroesRouter.get(
    '/',
    heroesController.list,
);

heroesRouter.get(
    '/:id',
    heroesController.show,
);
heroesRouter.put(
    '/:id',
    heroesController.update,
);
heroesRouter.delete(
    '/:id',
    heroesController.delete,
);



export default heroesRouter;
