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
}

export interface IPagination {
    pageNumber: number;
    pageSize: number;
}

export interface ICredential {
    email: string;
    password: string;
}