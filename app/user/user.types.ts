import { DateOnlyDataType } from "sequelize/types";

export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    role:string;
    age : number;
    gender : string;
    blood_group : string;
    address : string;
    contact : number;
    specialisation : string;
    experience : number;
    appointment : DateOnlyDataType;
    disease : string;
    test_reports : string;
    prescription : string; 
}

export interface IPagination {
    pageNumber: number;
    pageSize: number;
}

export interface ICredential {
    email: string;
    password: string;
}