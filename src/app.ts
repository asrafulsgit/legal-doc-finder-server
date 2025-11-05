import express, { type Application } from "express"; 
import cors from 'cors';
import { envs } from "./app/config/env";
import { router } from "./app/routes/routes";
import { globalErrorHandle } from "./app/middlewares/globalErrorHandler";


const app : Application = express();

app.use(express.json());

app.use(cors({
    origin : envs.FRONTENT_URL,
    credentials : true
}));

app.use('/api/v1',router);

app.use(globalErrorHandle);


export default app;