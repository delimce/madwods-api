import { Request, Response } from "express";
import { BaseController } from "./BaseController";

export class WodsController extends BaseController {

    async list(_req: Request, res: Response): Promise<void> {
        try {
            this.setOk("everything's good");
        } catch (error: any) {
            this.setError(error.message);
        } finally {
            res.status(this.status).json(this.result);
        }
    }
}