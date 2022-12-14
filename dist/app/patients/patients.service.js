"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const patients_repo_1 = __importDefault(require("./patients.repo"));
const create = (patient) => patients_repo_1.default.create(patient);
const getAllPatient = (pagination) => patients_repo_1.default.getAllPatient(pagination);
exports.default = {
    create,
    getAllPatient
};
//# sourceMappingURL=patients.service.js.map