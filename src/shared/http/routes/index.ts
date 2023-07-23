import documentsControllerRouter from "../../../modules/documents/routes/documentsRoutes";
import { Router } from "express";

const routes = Router();

routes.use('/documents', documentsControllerRouter)


export default routes
;
