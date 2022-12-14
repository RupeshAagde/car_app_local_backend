"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const routes_types_1 = require("./routes.types");
const patients_routes_1 = __importDefault(require("../patients/patients.routes"));
const doctors_routes_1 = __importDefault(require("../doctors/doctors.routes"));
// import PatientRouter from '../patients/patients.routes'
const user_routes_1 = __importDefault(require("../user/user.routes"));
exports.routes = [
    new routes_types_1.Route("/user", user_routes_1.default),
    new routes_types_1.Route("/patient", patients_routes_1.default),
    new routes_types_1.Route("/doctor", doctors_routes_1.default)
];
//# sourceMappingURL=routes.data.js.map