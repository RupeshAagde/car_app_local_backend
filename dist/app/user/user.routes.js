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
const user_service_1 = __importDefault(require("./user.service"));
const router = express_1.Router();
router.post("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const result = yield user_service_1.default.create(user);
        console.log(result);
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
}));
router.put("/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("111>>id");
        let id = req.params.id;
        console.log(id, ">>id");
        const user = req.body;
        const result = yield user_service_1.default.updateUser(user, id);
        console.log(result);
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
}));
router.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("user routes");
        // const pagination = req.params;
        // let pageNumber = parseInt(pagination.pageNumber);
        // let pageSize = parseInt(pagination.pageSize);
        const result = yield user_service_1.default.getAllPatient();
        console.log(result, "user result");
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
}));
exports.default = router;
//# sourceMappingURL=user.routes.js.map