import user from "./user.schema";
import { ERROR_MESSAGES } from "./user.response";
import { ResponseHandler } from "../utility/response-handler";
import { ICredential, IPagination, IUser } from "./user.types";
import jwt  from "jsonwebtoken";

const create = async (patient: IUser) => {

    let findUser = await user.findOne({ where: { email: patient.email } })
    if (findUser) {
        // return `User Already exist`
        throw ERROR_MESSAGES.ALREADY_EXIST
    }
    console.log("user repo")
    let a = user.create(patient);
} 

const login = async (userCredential : ICredential) => {
    
    let findUser = await user.findOne({ where: { email: userCredential.email } })

    if(!findUser){
        throw ERROR_MESSAGES.INVALID_CREDENTAIL
    }
    if(findUser.password !== userCredential.password){
        throw ERROR_MESSAGES.INVALID_PASSWORD
    }
    let payload = {
        id : findUser.id,
        name : findUser.name,
        role : findUser.role
    }
        const secretKey = process.env.SECRET_KEY as string;
        const token = jwt.sign(payload, secretKey);
        return {findUser , token }
    }

    //  try{

    //  } catch (error) {
    //     throw error
    //  }

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
    updateUser,
    login
}