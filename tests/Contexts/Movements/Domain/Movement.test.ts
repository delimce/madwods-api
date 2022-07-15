import { Movement } from "@Movement/Domain/Movement";

describe("Movement is a valid object", () => {
    it("is a valid object", async () => {
        const movement = new Movement(1, "name", "description");
        expect(typeof movement.getId() === "number").toBe(true);
        expect(typeof movement.getName() === "string").toBe(true);
        expect(typeof movement.getDescription() === "string").toBe(true);
    });
});