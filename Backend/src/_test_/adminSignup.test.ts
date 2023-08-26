// import { Request, Response } from "express";
// import Admin, { AdminDocument } from "../controller/adminController/adminLogin";
// import { createAdmin } from "../controller/adminController/adminSignup";
// import { createAdminValidator } from "../utils/utils";

// jest.mock("../../model/admins");
// jest.mock("../../utils/notifications");
// jest.mock("../../utils/utils");

// describe("createAdmin", () => {
//   let req: Partial<Request>;
//   let res: Partial<Response>;
//   let admin: AdminDocument;

//   beforeEach(async () => {
//     req = {
//       body: {
//         username: "admin",
//         password: "password",
//         email: "admin@example.com",
//       },
//     };
//     res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };
//     admin = new Admin({
//       username: "admin",
//       password: "password",
//       email: "admin@example.com",
//       role: "admin",
//     });
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   it("should return 400 if validation fails", async () => {
//     const error = {
//       error: {
//         details: [{ message: "Validation error" }],
//       },
//     };

//     jest
//       .spyOn(createAdminValidator, "validate")
//       .mockReturnValueOnce(error as any);

//     await createAdmin(req as Request, res as Response);

//     expect(res.status).toHaveBeenCalledWith(400);
//     expect(res.json).toHaveBeenCalledWith({
//       error: error.error.details[0].message,
//     });
//   });

//   it("should return 400 if admin already exists", async () => {
//     jest.spyOn(createAdminValidator, "validate").mockReturnValueOnce({
//       error: undefined,
//       value: undefined,
//     });

//     jest.spyOn(Admin, "findOne").mockResolvedValueOnce(admin);

//     await createAdmin(req as Request, res as Response);

//     expect(res.status).toHaveBeenCalledWith(400);
//     expect(res.json).toHaveBeenCalledWith({
//       error: "Admin already exists",
//     });
//   });

//   it("should create a new admin and return 201", async () => {
//     jest.spyOn(createAdminValidator, "validate").mockReturnValueOnce({
//       error: undefined,
//       value: undefined,
//     });

//     jest.spyOn(Admin, "findOne").mockResolvedValueOnce(null);
//     jest.spyOn(Admin.prototype, "save").mockResolvedValueOnce(admin);

//     const token = "token";
//     jest.spyOn(global.Math, "random").mockReturnValueOnce(0.5);
//     jest
//       .spyOn(Date.prototype, "toISOString")
//       .mockReturnValueOnce("2023-08-26T00:00:00.000Z");
//     jest
//       .spyOn(global, "setTimeout")
//       .mockImplementationOnce((fn) => fn() as any);

//     jest.spyOn(generateToken, "generateToken").mockReturnValueOnce(token);

//     await createAdmin(req as Request, res as Response);

//     expect(res.status).toHaveBeenCalledWith(201);
//     expect(res.json).toHaveBeenCalledWith({
//       message: "Admin created successfully",
//       newAdmin: admin,
//       token,
//     });
//   });

//   it("should return 500 if an error occurs", async () => {
//     const error = new Error("Internal server error");
//     jest.spyOn(createAdminValidator, "validate").mockReturnValueOnce({
//       error: undefined,
//       value: undefined,
//     });

//     jest.spyOn(Admin, "findOne").mockRejectedValueOnce(error);

//     await createAdmin(req as Request, res as Response);

//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.json).toHaveBeenCalledWith({
//       error: error.message,
//     });
//   });
// });
