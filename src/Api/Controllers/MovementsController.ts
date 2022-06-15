import { RequestHandler } from "express";
import { BaseController } from "./BaseController";

export class MovementsController extends BaseController {

    constructor() {
        super();
    }

    list(req, res, next): RequestHandler {
        return res.status().send("Hello World!");
    }
}