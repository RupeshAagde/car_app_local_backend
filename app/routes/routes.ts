import { Application, json, NextFunction, Request, Response } from "express";
import helmet from "helmet";
import { routes } from "./routes.data";
import { ResponseHandler } from './../utility/response-handler';
import { verifyToken } from './../utility/verify-token';



export const registerMiddlewares = (app: Application) => {
    app.use(helmet());
    app.use(json());
    
    app.use(verifyToken(['/owner/login','/owner','/tenant/login','/tenant']));


    for (let route of routes) {
        app.use(route.path, route.router)
    }

    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
        res.status(err.statusCode || 500).send(new ResponseHandler(null, err));
    })
}