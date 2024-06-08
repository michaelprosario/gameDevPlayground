import { AdderService } from "../src/adder-service"

test("adderService should work", () => {
    let service = new AdderService()
    let response = service.add(3,4);
    expect(response).toBe(7);
});