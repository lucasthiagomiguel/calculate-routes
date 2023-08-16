import heroesControllerRouter from "../../modules/heroes/routes/heroesRoutes";
import usersControllerRouter from "../../modules/users/routes/usersRoutes";
import sessionsRoutes from "../../modules/users/routes/sessionsRoutes";
import { Router } from "express";

const routes = Router();

routes.use('/Knights', heroesControllerRouter)
routes.use('/users', usersControllerRouter)
routes.use('/sessions', sessionsRoutes)


export default routes
;
