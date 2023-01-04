export interface IUser {
    id: number;
    username: string;
    email: string;
    password: string;
    role:string
}

export interface IPagination {
    pageNumber: number;
    pageSize: number;
}

export interface ICredential {
    email: string;
    password: string;
}