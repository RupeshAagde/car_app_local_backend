import customer from "./tenant.schema";
import { ICustomer } from "./tenant.types";
import jwt  from "jsonwebtoken";
import { ERROR_MESSAGES } from "./tenant.response";

const create = async (customerdetail: ICustomer) => {
    let findTenant = await customer.findOne({ where: { customer_email: customerdetail.customer_email } })
    if (findTenant) {
        throw ERROR_MESSAGES.ALREADY_EXIST
    }
    let created = customer.create(customerdetail);
    return created
}

const login = async (tenantCredential : ICustomer) => {
    let tenantDetail = await customer.findOne({ where: { customer_email: tenantCredential.customer_email } })

    if(!tenantDetail){
        throw ERROR_MESSAGES.INVALID_CREDENTAIL
    }
    if(tenantDetail.password !== tenantCredential.password){
        throw ERROR_MESSAGES.INVALID_PASSWORD
    }
    let payload = {
        id : tenantDetail.id,
        name : tenantDetail.customer_name,
    }
        const secretKey = process.env.SECRET_KEY as string;
        const token = jwt.sign(payload, secretKey);
        return {tenantDetail , token }
    }

const getAllCustomer = () => customer.findAll()

export default {
    create,
    getAllCustomer,
    login
}