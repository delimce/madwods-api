import { Request, Response } from "express";
import container from "@Api/Containers/WodContainer";
import { BaseController } from "@Api/Controllers/BaseController";

export class WodsController extends BaseController {


    constructor() {
        super();
    }

    async list(_req: Request, res: Response): Promise<void> {
        try {
            const wodList = await container.get('executers.wod.list').run();
            this.setData(wodList);
            this.setOk("wod's list");
        } catch (error: any) {
            this.setError(error.message);
        } finally {
            res.status(this.status).json(this.result);
        }
    }

    async detail(_req: Request, res: Response): Promise<void> {
        try {
            const executer = container.get('executers.wod.detail');
            executer.wodId = _req.params.id;
            const wod = await executer.run();
            this.setData(wod);
            this.setOk("wod's content");
        } catch (error: any) {
            this.setError(error.message);
        } finally {
            res.status(this.status).json(this.result);
        }
    }
}