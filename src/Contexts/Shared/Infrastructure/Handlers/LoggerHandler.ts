import * as dotenv from "dotenv";
import { Logger } from "@Shared/Domain/Logger";
import pino from "pino";

export class LoggerHandler implements Logger {

    level: string = "debug";
    driver: any;

    constructor() {

        dotenv.config();

        let logFile: string | undefined = process.env.LOG_FILE || 'logs/app.log';

        /**					
            Level:	trace	debug	info	warn	error	fatal	silent
            Value:	10	    20	    30	    40	    50	    60	    Infinity
         */

        this.driver = pino(
            {
                level: this.level,
                timestamp: () => `,"time":"${new Date().toISOString()}"`,

            },
            pino.destination({
                dest: logFile,
                minLength: 200, // Buffer before writing
                sync: false // Asynchronous logging, the default
            }));

    }

    info(message: string): void {
        this.driver.info(message);
    }
    debug(message: string): void {
        this.driver.debug(message);
    }
    error(message: string | Error): void {
        this.driver.error(message);
    }
    warn(message: string): void {
        this.driver.warn(message);
    }

}