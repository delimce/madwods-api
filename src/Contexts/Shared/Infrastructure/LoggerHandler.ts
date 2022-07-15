import * as dotenv from "dotenv";
import { Logger } from "@Shared/Domain/Logger";
import log4js from "log4js";

export class LoggerHandler implements Logger {
    level: string = "debug";

    constructor() {

        dotenv.config();

        let logFile: string | undefined = process.env.LOG_FILE;
        const config = {
            appenders: {
                console: {
                    type: 'file',
                    filename: logFile,
                    layout: {
                        type: 'pattern',
                        pattern: '%d{yyyy-MM-dd hh:mm:ss} %p %c - %m'
                    }
                }
            },
            categories: {
                default: {
                    appenders: ['console'],
                    level: 'all'
                }
            }
        };

        log4js.configure(config);
    }

    info(message: string): void {
        this.level = "info";
        log4js.getLogger(this.level).info(message);
    }
    debug(message: string): void {
        log4js.getLogger(this.level).debug(message);
    }
    error(message: string | Error): void {
        this.level = "error";
        log4js.getLogger(this.level).error(message);
    }
    warn(message: string): void {
        this.level = "warn";
        log4js.getLogger(this.level).warn(message);
    }

}