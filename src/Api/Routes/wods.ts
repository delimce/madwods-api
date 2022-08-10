import { Router,Request,Response } from "express";
import { WodsController } from "@Api/Controllers/WodsController";

const wods = Router();


const controller = new WodsController();

wods.get("/", (req: Request, res: Response) => controller.list(req, res));
wods.get("/:id", (req: Request, res: Response) => controller.detail(req, res));


export default wods;