"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const doctors_schema_1 = __importDefault(require("./doctors.schema"));
const addData = (data) => doctors_schema_1.default.create(data);
exports.default = {
    addData
};
//# sourceMappingURL=doctors.repo.js.map