import { Router } from "express";
import { MovementsController } from "../Controllers/MovementsController";
const movements = Router();

const controller = new MovementsController();

movements.get("/", controller.list);

export default movements;