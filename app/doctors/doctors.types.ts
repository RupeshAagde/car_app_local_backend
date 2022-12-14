export interface IHistoricData {
    id: number;
    patient_id: number;
    date: string;
    diagnosis: string;
    prescription: string;
    lab_Report: string;
}

export interface IDoctor {
    id: number;
    specialisation: string;
    experience: string;
    name: string;
    contact: number;
    address: string;
}