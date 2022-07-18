import * as dotenv from "dotenv";
import express, { Application } from "express";
import bodyParser from "@Api/Middleware/bodyParser";
import cors from "@Api/Middleware/cors";
import databaseConnect from "@Api/Middleware/database";

// routes
import movements from "./Routes/movements";
import wods from "./Routes/wods";

databaseConnect();

dotenv.config();
const app = express() as Application;
// v1 api routes
const v1pref: string = "api/v1";

// Middleware
app.use(bodyParser);
app.use(cors);

app.use(`/${v1pref}/movements`, movements);
app.use(`/${v1pref}/wod`, wods);
export default app;
