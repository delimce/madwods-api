import { RequestHandler } from "express";

export class MovementsController {

    list(req, res, next): RequestHandler {
        return res.send("Hello World!");
    }
}