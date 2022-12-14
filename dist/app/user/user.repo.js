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
const user_schema_1 = __importDefault(require("./user.schema"));
const user_response_1 = require("./user.response");
const create = (patient) => __awaiter(void 0, void 0, void 0, function* () {
    let findUser = yield user_schema_1.default.findOne({ where: { email: patient.email } });
    if (findUser) {
        // return `User Already exist`
        throw user_response_1.ERROR_MESSAGES.ALREADY_EXIST;
    }
    console.log("user repo");
    let a = user_schema_1.default.create(patient);
});
const updateUser = (userData, id) => __awaiter(void 0, void 0, void 0, function* () {
    let findUser = yield user_schema_1.default.findOne({ where: { id: id } });
    if (!findUser) {
        return `User Not Found`;
    }
    let updateUser = user_schema_1.default.update(userData, { where: { id: id } });
    // console.log(updateUser,">>updateUser updateUser")
    console.log(updateUser, "updateUser");
    return updateUser;
});
const getAllPatient = () => user_schema_1.default.findAll(
// offset: pagination.pageNumber * pagination.pageSize,
// limit: pagination.pageSize
);
// const findUser =  user.findOne({ where: { id: id } })
exports.default = {
    create,
    getAllPatient,
    updateUser
};
//# sourceMappingURL=user.repo.js.map