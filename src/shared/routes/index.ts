import clientControllerRouter from "../../modules/client/routes/clientRoutes";
import usersControllerRouter from "../../modules/users/routes/usersRoutes";
import sessionsRoutes from "../../modules/users/routes/sessionsRoutes";
import { Router } from "express";

const routes = Router();

routes.use('/client', clientControllerRouter)
routes.use('/users', usersControllerRouter)
routes.use('/sessions', sessionsRoutes)


export default routes
;
