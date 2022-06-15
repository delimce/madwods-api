import { Request, Response } from "express";
import { BaseController } from "./BaseController";

export class WodsController extends BaseController {

    protected msg: string

    async list(req: Request, res: Response): Promise<void> {
        try {
            this.setOk("everything's good");
        } catch (error) {
            this.setError(error.message);
        } finally {
            res.status(this.status).json(this.result);
        }
    }
}