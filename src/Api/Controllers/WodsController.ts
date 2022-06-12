import { RequestHandler } from "express";   

export class WodsController {
    list(req, res, next): RequestHandler {
        return res.send("Hello World!");
    }
}