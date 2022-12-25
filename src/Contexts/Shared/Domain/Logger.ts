export interface Logger {
    level: string,
    info(message: string): void;
    debug(message: string): void;
    error(message: string | Error): void;
    warn(message: string): void;

}