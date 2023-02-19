import customerRepo from "./tenant.repo";
import { ICustomer } from "./tenant.types";

const create = (customer: ICustomer) => customerRepo.create(customer);

const login = async (tenantCredential: ICustomer) => {
    try {
        return await customerRepo.login(tenantCredential)
    } catch (error) {
        throw error
    }
}

const getAllCustomer = () => customerRepo.getAllCustomer();

export default {
    create,
    getAllCustomer,
    login
}