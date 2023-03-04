import ownerRepo from "./owner.repo";
import { ICredential, IOwner } from "./owner.types";

const create = async (ownerDetail: IOwner) => {
    try {
        return await ownerRepo.create(ownerDetail);
    } catch (error) {
        throw error
    }

}

const login = async (ownerCredential: ICredential) => {
    try {
        return await ownerRepo.login(ownerCredential)
    } catch (error) {
        throw error
    }
}

const updateUser = async (ownerDetail: IOwner) => {
    try{
        let updatedOwner = await ownerRepo.updateUser(ownerDetail)
        return updatedOwner
    }catch (error) {
        throw error
    }

}

const getAllOwner = () => ownerRepo.getAllOwner();

export default {
    create,
    getAllOwner,
    updateUser,
    login
}