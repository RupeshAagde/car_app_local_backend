import { Router } from "express";
import { ResponseHandler } from "../utility/response-handler";
import doctorsService from "./doctors.service";
import { IHistoricData } from "./doctors.types";

const router = Router();

router.post("/paitent/prescription", async (req, res, next) => {
    try {
        const data = req.body as IHistoricData;
        const result = await doctorsService.addData(data);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})
router.post("/paitent/prescription", async (req, res, next) => {
    try {
        const data = req.body as IHistoricData;
        const result = await doctorsService.addData(data);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})

export default router;