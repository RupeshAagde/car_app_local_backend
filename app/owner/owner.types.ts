import { DateOnlyDataType } from "sequelize/types";

export interface IOwner {
    id: number;
    owner_name : string;
    owner_email : string;
    password: string;
    owner_contact_no : number;
    owner_address : string;
    vehicle_model : string;
    vehicle_no : string;
    per_day_price : number;
    vehicle_type : string;
    booking_available : DateOnlyDataType;
}

export interface ICredential {
    owner_email: string;
    password: string;
}