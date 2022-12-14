import { Router } from "express";
import { ResponseHandler } from "../utility/response-handler";
import userService from "./user.service";
import { IUser } from "./user.types";

const router = Router();

router.post("/", async (req, res, next) => {
    try {
        const user = req.body as IUser;
        const result = await userService.create(user);
        console.log(result)

        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})

router.put("/:id", async (req, res, next) => {
    try {        
        console.log("111>>id")
        let id = req.params.id;
        console.log(id,">>id")
        const user = req.body as IUser;
        const result = await userService.updateUser(user,id);
        console.log(result)

        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})
router.get("/", async (req, res, next) => {
    try {
        console.log("user routes")
        // const pagination = req.params;

        // let pageNumber = parseInt(pagination.pageNumber);
        // let pageSize = parseInt(pagination.pageSize);

        const result = await userService.getAllPatient();
        console.log(result,"user result")
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})

export default router;