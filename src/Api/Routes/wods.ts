import { Router } from "express";
import { WodsController } from "../Controllers/WodsController";
const wods = Router();


const controller = new WodsController();

wods.get("/", controller.list);

export default wods;