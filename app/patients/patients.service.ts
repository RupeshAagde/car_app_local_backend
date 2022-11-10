import patientsRepo from "./patients.repo";
import { IPagination, IPatient } from "./patients.types";

const create = (patient: IPatient) => patientsRepo.create(patient);

const getAllPatient = (pagination: IPagination) => patientsRepo.getAllPatient(pagination);

export default {
    create,
    getAllPatient
}