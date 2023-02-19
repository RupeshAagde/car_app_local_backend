import { Router } from "express";
import { ResponseHandler } from "../utility/response-handler";
import onwerService from "./owner.service";
import { IOwner,ICredential } from "./owner.types";

const router = Router();

router.post("/", async (req, res, next) => {
    try {
        const ownerDetail = req.body as IOwner;
        const result = await onwerService.create(ownerDetail);
        console.log(result)

        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})
router.post("/login", async (req, res, next) => {
    try {
        const ownerCredential = req.body as ICredential;
        const result = await onwerService.login(ownerCredential);

        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})

router.put("/update", async (req, res, next) => {
    try {        
        const ownerDetail = req.body as IOwner;
        const result = await onwerService.updateUser(ownerDetail);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})
router.get("/", async (req, res, next) => {
    try {
        const result = await onwerService.getAllOwner();
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})

export default router;