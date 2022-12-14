"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const patients_schema_1 = __importDefault(require("./patients.schema"));
const create = (patient) => patients_schema_1.default.create(patient);
const getAllPatient = (pagination) => patients_schema_1.default.findAll({
    offset: pagination.pageNumber * pagination.pageSize,
    limit: pagination.pageSize
});
exports.default = {
    create,
    getAllPatient
};
//# sourceMappingURL=patients.repo.js.map