"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const doctors_repo_1 = __importDefault(require("./doctors.repo"));
const addData = (data) => doctors_repo_1.default.addData(data);
exports.default = {
    addData
};
//# sourceMappingURL=doctors.service.js.map