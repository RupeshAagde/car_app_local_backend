import vehicle_detail from "./owner.schema";
import { ERROR_MESSAGES } from "./owner.response";
import { ResponseHandler } from "../utility/response-handler";
import { ICredential, IOwner } from "./owner.types";
import jwt  from "jsonwebtoken";

const create = async (ownerDetail: IOwner) => {

    let findOwner = await vehicle_detail.findOne({ where: { owner_email: ownerDetail.owner_email } })
    if (findOwner) {
        throw ERROR_MESSAGES.ALREADY_EXIST
    }
    let createOwner = vehicle_detail.create(ownerDetail);
    return createOwner


} 

const login = async (ownerCredential : ICredential) => {
    
    let ownerDetail = await vehicle_detail.findOne({ where: { owner_email: ownerCredential.owner_email } })

    if(!ownerDetail){
        throw ERROR_MESSAGES.INVALID_CREDENTAIL
    }
    if(ownerDetail.password !== ownerCredential.password){
        throw ERROR_MESSAGES.INVALID_PASSWORD
    }
    let payload = {
        id : ownerDetail.id,
        name : ownerDetail.owner_name,
    }
        const secretKey = process.env.SECRET_KEY as string;
        const token = jwt.sign(payload, secretKey);
        return {ownerDetail , token }
    }

const updateUser = async (ownerDetail: IOwner) => {
    let findUser = await vehicle_detail.findOne({ where: { owner_email: ownerDetail.owner_email } })
    if (!findUser) {
        return `User Not Found`
    }
    let updateUser = await vehicle_detail.update(ownerDetail, { where: { owner_email: ownerDetail.owner_email } })

    let getAllDetail = await vehicle_detail.findOne({ where: { owner_email: ownerDetail.owner_email } })
    return getAllDetail
}
const getAllOwner = () => vehicle_detail.findAll()

// const findUser =  user.findOne({ where: { id: id } })

export default {
    create,
    getAllOwner,
    updateUser,
    login
}