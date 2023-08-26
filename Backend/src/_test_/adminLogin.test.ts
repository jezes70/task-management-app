import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { loginAdmin } from "../controller/adminController/adminLogin";
import { AdminDocument } from "../controller/adminController/adminLogin";
import { loginAdminSchema } from "../controller/adminController/adminLogin";
import Admin from "../model/admins";

jest.mock("../../model/admins");
jest.mock("../../utils/notifications");

describe("loginAdmin", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let admin: AdminDocument;

  beforeEach(async () => {
    req = {
      body: {
        email: "admin@example.com",
        password: "password",
      },
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    admin = new Admin({
      email: "admin@example.com",
      password: await bcrypt.hash("password", 10),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return 400 if validation fails", async () => {
    const error = {
      error: {
        details: [{ message: "Validation error" }],
      },
    };

    jest.spyOn(loginAdminSchema, "validate").mockReturnValueOnce(error as any);

    await loginAdmin(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      error: error.error.details[0].message,
    });
  });

  it("should return 404 if admin is not found", async () => {
    jest.spyOn(loginAdminSchema, "validate").mockReturnValueOnce({
      error: undefined,
      value: undefined,
    });

    jest.spyOn(admin.constructor, "findOne" as any).mockResolvedValueOnce(null);

    await loginAdmin(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({
      error: "Admin not found",
    });
  });

  it("should return 401 if password is incorrect", async () => {
    jest.spyOn(loginAdminSchema, "validate").mockReturnValueOnce({
      error: undefined,
      value: undefined,
    });

    jest
      .spyOn(admin.constructor, "findOne" as any)
      .mockResolvedValueOnce(admin);

    jest.spyOn(bcrypt, "compare").mockResolvedValueOnce(false as never);

    await loginAdmin(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      error: "Invalid credentials",
    });
  });

  it("should return 200 if login is successful", async () => {
    jest.spyOn(loginAdminSchema, "validate").mockReturnValueOnce({
      error: undefined,
      value: undefined,
    });

    jest
      .spyOn(admin.constructor, "findOne" as any)
      .mockResolvedValueOnce(admin);

    jest.spyOn(bcrypt, "compare").mockResolvedValueOnce(true as never);

    const token = "token";
    jest.spyOn(global.Math, "random").mockReturnValueOnce(0.5);
    jest
      .spyOn(Date.prototype, "toISOString")
      .mockReturnValueOnce("2023-08-26T00:00:00.000Z");
    jest
      .spyOn(global, "setTimeout")
      .mockImplementationOnce((fn) => fn() as any);

    await loginAdmin(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      message: "Login successful",
      admin,
      token,
    });
  });

  it("should return 500 if an error occurs", async () => {
    const error = new Error("Internal server error");
    jest.spyOn(loginAdminSchema, "validate").mockReturnValueOnce({
      error: undefined,
      value: undefined,
    });

    jest
      .spyOn(admin.constructor, "findOne" as any)
      .mockRejectedValueOnce(error);

    await loginAdmin(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      error: error.message,
    });
  });
});
