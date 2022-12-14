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
const doctors_service_1 = __importDefault(require("./doctors.service"));
const router = express_1.Router();
router.post("/paitent/prescription", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = yield doctors_service_1.default.addData(data);
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
}));
router.post("/paitent/prescription", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = yield doctors_service_1.default.addData(data);
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
}));
exports.default = router;
//# sourceMappingURL=doctors.routes.js.map