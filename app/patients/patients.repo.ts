import patients from "./patients.schema";
import { IPagination, IPatient } from "./patients.types";

const create = (patient: IPatient) => patients.create(patient);

const getAllPatient = (pagination: IPagination) => patients.findAll({
    offset: pagination.pageNumber * pagination.pageSize,
    limit: pagination.pageSize
})

export default {
    create,
    getAllPatient
}