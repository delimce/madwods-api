import { Router,Request,Response } from "express";
import { WodsController } from "../Controllers/WodsController";

const wods = Router();


const controller = new WodsController();

wods.get("/", (req: Request, res: Response) => controller.list(req, res));


export default wods;