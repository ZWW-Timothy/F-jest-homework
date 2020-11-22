import axios from "axios";
import { register } from "../user";
import { verifyUsername } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    await register("mockUsername, mockPassword");
    expect(axios.post).toHaveBeenCalled();
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    verifyUsername.mockImplementation(() => false);
    await expect(register("mockUsername, mockPassword")).rejects.toThrow();
  });
});
