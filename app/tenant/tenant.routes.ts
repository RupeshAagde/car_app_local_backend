import { Router } from "express";
import { ResponseHandler } from "../utility/response-handler";
import customerService from "./tenant.service";
import { ICustomer } from "./tenant.types";

const router = Router();

router.post("/", async (req, res, next) => {
    try {
        const customer = req.body as ICustomer;
        const result = await customerService.create(customer);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})

router.post("/login", async (req, res, next) => {
    try {
        const customer = req.body as ICustomer;
        const result = await customerService.login(customer);

        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})

router.get("/", async (req, res, next) => {
    try {
        const result = await customerService.getAllCustomer();
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})

export default router;