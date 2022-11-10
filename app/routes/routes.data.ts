import { Route } from './routes.types';
import PatientRouter from '../patients/patients.routes'
import DoctorRouter from '../doctors/doctors.routes'
export const routes: Route[] = [
    new Route("/patient",PatientRouter),
    new Route("/doctor",DoctorRouter)
];