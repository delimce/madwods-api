import { Request, Response } from "express";
import { MovementListExecuter } from "../../Contexts/Movement/Application/MovementListExecuter";
import { BaseController } from "./BaseController";

export class MovementsController extends BaseController {

    protected movementList: MovementListExecuter;

    constructor() {
        super();
        this.movementList = new MovementListExecuter();
    }

    async list(req: Request, res: Response): Promise<void> {
        try {
            const movements = await this.movementList.run();
            this.setData(movements);
            this.setOk("movements list");
        } catch (error: any) {
            this.setError(error.message);
        } finally {
            res.status(this.status).json(this.result);
        }

    }

}