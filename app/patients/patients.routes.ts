import { Router } from "express";
import { ResponseHandler } from "../utility/response-handler";
import patientsService from "./patients.service";
import { IPatient } from "./patients.types";

const router = Router();

router.post("/details", async (req, res, next) => {
    try {
        const patient = req.body as IPatient;
        console.log(patient)
        const result = await patientsService.create(patient);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})

router.get("/:pageNumber/:pageSize", async (req, res, next) => {
    try {
        console.log("patient routes")
        const pagination = req.params;

        let pageNumber = parseInt(pagination.pageNumber);
        let pageSize = parseInt(pagination.pageSize);

        const result = await patientsService.getAllPatient({pageNumber,pageSize});
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})

export default router;