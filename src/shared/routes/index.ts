import documentsControllerRouter from "../../modules/heroes/routes/documentsRoutes";
import usersControllerRouter from "../../modules/users/routes/usersRoutes";
import sessionsRoutes from "../../modules/users/routes/sessionsRoutes";
import { Router } from "express";

const routes = Router();

routes.use('/documents', documentsControllerRouter)
routes.use('/users', usersControllerRouter)
routes.use('/sessions', sessionsRoutes)


export default routes
;
