"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const response_handler_1 = require("../utility/response-handler");
const patients_service_1 = __importDefault(require("./patients.service"));
const router = express_1.Router();
router.post("/details", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const patient = req.body;
        console.log(patient);
        const result = yield patients_service_1.default.create(patient);
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
}));
router.get("/:pageNumber/:pageSize", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("patient routes");
        const pagination = req.params;
        let pageNumber = parseInt(pagination.pageNumber);
        let pageSize = parseInt(pagination.pageSize);
        const result = yield patients_service_1.default.getAllPatient({ pageNumber, pageSize });
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
}));
exports.default = router;
//# sourceMappingURL=patients.routes.js.map