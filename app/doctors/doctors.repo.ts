import HistoricData from "./doctors.schema";
import { IHistoricData } from "./doctors.types";

const addData = (data:IHistoricData) => HistoricData.create(data);

export default{
    addData
}