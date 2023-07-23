import { Router } from 'express';
import DocumentsController  from '../controllers/DocumentsController';


const documentsRouter = Router();
const documentsController = new DocumentsController();



documentsRouter.post(
  '/',
  documentsController.create,
);



export default documentsRouter;
