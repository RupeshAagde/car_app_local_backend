import userRepo from "./user.repo";
import { IPagination, IUser } from "./user.types";

const create = async (patient: IUser) => {
    try {
        console.log("user service")
        await userRepo.create(patient);
    } catch (error) {
        throw error
    }
   
}
const updateUser = (user:IUser,id:any) => {
userRepo.updateUser(user,id)
}
const getAllPatient = () => userRepo.getAllPatient();

export default {
    create,
    getAllPatient,
    updateUser
}