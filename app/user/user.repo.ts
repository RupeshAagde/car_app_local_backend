import user from "./user.schema";
import { ERROR_MESSAGES } from "./user.response";
import { ResponseHandler } from "../utility/response-handler";
import { IPagination, IUser } from "./user.types";

const create = async (patient: IUser) => {

    let findUser = await user.findOne({ where: { email: patient.email } })
    if (findUser) {
        // return `User Already exist`
        throw ERROR_MESSAGES.ALREADY_EXIST
    }
    console.log("user repo")
    let a = user.create(patient);
}
const updateUser = async (userData: IUser, id: any) => {
    let findUser = await user.findOne({ where: { id: id } })
    if (!findUser) {
        return `User Not Found`
    }
    let updateUser = user.update(userData, { where: { id: id } })
    // console.log(updateUser,">>updateUser updateUser")
    console.log(updateUser, "updateUser")
    return updateUser
}
const getAllPatient = () => user.findAll(
    // offset: pagination.pageNumber * pagination.pageSize,
    // limit: pagination.pageSize
)

// const findUser =  user.findOne({ where: { id: id } })

export default {
    create,
    getAllPatient,
    updateUser
}