import { Route } from './routes.types';
import PatientRouter from '../patients/patients.routes'
import DoctorRouter from '../doctors/doctors.routes'
// import PatientRouter from '../patients/patients.routes'
import userRouter from '../user/user.routes'
export const routes: Route[] = [
    new Route("/user",userRouter),
    new Route("/patient",PatientRouter),
    new Route("/doctor",DoctorRouter)
];