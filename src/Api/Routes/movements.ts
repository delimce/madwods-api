import { Router, Request, Response } from "express";
import { MovementsController } from "@Api/Controllers/MovementsController";
const movements = Router();

const controller = new MovementsController();

movements.get("/", (req: Request, res: Response) => controller.list(req, res));


export default movements;