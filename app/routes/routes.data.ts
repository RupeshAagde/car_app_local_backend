import { Route } from './routes.types';
import tenantRouter from '../tenant/tenant.routes'
import ownerRouter from '../owner/owner.routes'
export const routes: Route[] = [
    new Route("/owner",ownerRouter),
    new Route("/tenant",tenantRouter),
];