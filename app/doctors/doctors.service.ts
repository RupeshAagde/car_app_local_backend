import doctorsRepo from "./doctors.repo";
import { IHistoricData } from "./doctors.types";

const addData = (data:IHistoricData)=> doctorsRepo.addData(data);

export default{
    addData
}