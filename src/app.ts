import express, { type Application } from "express"; 
import cors from 'cors';
import { envs } from "./app/config/env";


const app : Application = express();

app.use(express.json());
app.use(cors({
    origin : envs.FRONTENT_URL,
    credentials : true
}));




export default app;