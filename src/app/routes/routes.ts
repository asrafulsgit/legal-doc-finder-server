import { Router } from "express";
import { documentRouter } from "../../modules/document/document.router";

export const router  = Router();


const routes = [
    {
        path : '/documents',
        route :  documentRouter
    }
]


routes.forEach((route)=>{
    router.use(route.path, route.route);
})


