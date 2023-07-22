import { Router } from "express";

const routes = Router();

routes.get('/',(req,res) =>{
    return res.json({menssage:'Hello dev'});
});


export default routes
;
