import * as dotenv from "dotenv";
import express, { Application } from "express";
import bodyParser from "./Middleware/bodyParser";
import cors from "./Middleware/cors";

dotenv.config();
const app = express() as Application;

// v1 api routes
const v1pref:string = "api/v1"

// Middleware
app.use(bodyParser)
app.use(cors)

// routes
import movements from "./Routes/movements";
import wods from "./Routes/wods";
app.use(`/${v1pref}/movements`, movements)
app.use(`/${v1pref}/wod`, wods);

export default app;
