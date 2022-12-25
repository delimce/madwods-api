import services from "@Api/Services/InfrastructureServices";

describe("use loggerHandler", () => {
    it("should be save a new entry in log file", () => {

        const loggerHandler = services.get("services.logger");
        loggerHandler.info("This is a info message");
        loggerHandler.debug("This is a debug message");
        loggerHandler.error("This is a error message");
        loggerHandler.warn("This is a warning message");
        expect(typeof loggerHandler).toBe("object");
    }
    );
});