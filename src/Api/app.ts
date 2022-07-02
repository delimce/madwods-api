import * as dotenv from "dotenv";
import express, { Application } from "express";
import bodyParser from "./Middleware/bodyParser";
import cors from "./Middleware/cors";

dotenv.config();
const app = express() as Application;

// Middleware
app.use(bodyParser)
app.use(cors)

// routes
import movements from "./Routes/movements";
import wods from "./Routes/wods";

app.use("/movement", movements);
app.use("/wod", wods);

export default app;
