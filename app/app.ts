// import express from 'express';
// import { connectToPostgres } from './connections/postgres.connection';
// import { registerMiddlewares } from './routes/routes';

// export const startServer = async () => {
//     try {
//         const app = express();
//         await connectToPostgres();
//         registerMiddlewares(app);

//         const { PORT } = process.env;
//         app.listen(
//             PORT,
//             () => console.log(`SERVER HAS STARTED ON PORT ${PORT}`)
//         );
//     } catch (e) {
//         console.log('SOMETHING WENT WRONG');
//         process.exit(1);
//     }
// }

import express from 'express';
import { connectToPostgres } from './connections/postgres.connection';
import { registerMiddlewares } from './routes/routes';
import * as bodyParser from "body-parser";
import cors from "cors";

// export const startServer = async () => {
//     try {
//         const app = express();
//         console.log(">")
//         await connectToPostgres();
//         console.log("1")
//         registerMiddlewares(app);

//         const { PORT } = process.env;
//         app.listen(
//             PORT,
//             () => console.log(`SERVER HAS STARTED ON PORT ${PORT}`)
//         );
//     } catch (e) {
//         console.log('SOMETHING WENT WRONG');
//         process.exit(1);
//     }
// }

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

app.listen(4000, () => console.log('Example app is listening on port 4000.'));

const createDbConnection = async () => {
    try {
        await connectToPostgres();   
        console.log("1");
        await registerMiddlewares(app);
    } catch (error: any) {
        console.log(error);
        
        throw Error(error.message);
    }
}

createDbConnection();