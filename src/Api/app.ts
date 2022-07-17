import * as dotenv from "dotenv";
import express, { Application } from "express";
import bodyParser from "@Api/Middleware/bodyParser";
import cors from "@Api/Middleware/cors";

// routes
import movements from "./Routes/movements";
import wods from "./Routes/wods";

import {databaseConnect} from "@Shared/Infrastructure/DataSources/production";

dotenv.config();
const app = express() as Application;

databaseConnect();
// v1 api routes
const v1pref: string = "api/v1";

// Middleware
app.use(bodyParser);
app.use(cors);


app.use(`/${v1pref}/movements`, movements);
app.use(`/${v1pref}/wod`, wods);


export default app;
