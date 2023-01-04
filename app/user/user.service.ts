import userRepo from "./user.repo";
import { ICredential, IPagination, IUser } from "./user.types";

const create = async (patient: IUser) => {
    try {
        return await userRepo.create(patient);
    } catch (error) {
        throw error
    }
   
}

const login = async (userCredential : ICredential) =>{
    try{
        return await userRepo.login(userCredential)
    }catch (error) {
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
    updateUser,
    login
}