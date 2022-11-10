export interface IPatient {
    id: number;
    name: string;
    age: number;
    gender: string;
    blood_group: string;
}

export interface IPagination {
    pageNumber: number;
    pageSize: number;
}