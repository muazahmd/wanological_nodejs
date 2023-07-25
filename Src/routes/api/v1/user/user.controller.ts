const express = require("express");
import { NextFunction, Request, Response } from "express";
const router = express.Router();
import { APIResponse } from "../../../../helper/APIResponse"; // Response Path: src/helper/API Response.ts
import { ResponseCode } from "../../../../config/keys/GeneralKeys"; // Import Response Code
import db from "../../../../config/connection/MongoDB";
import { UserModel } from "../../../../Model/index";
export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
// interface for Request & Response
interface RequestInterface {
  body: IUser;
}
router.get(  "/",  async (req: RequestInterface, res: Response, next: NextFunction) => {
    try {
      let result = await UserModel.find();
      APIResponse({
        res,
        Status: "Store Not Found",
        StatusCode: ResponseCode.OK,
        Message: "The Store is not found in the database",
        Data: result,
      });
    } catch (err) {
      APIResponse({
        res,
        Status: "",
        StatusCode: ResponseCode.Bad_Request,
        Message: "",
        Data: err,
      });
    }
  }
);


router.get( "/:id",  async (req: Request, res: Response, next: NextFunction) => {
    try {
        let result = await UserModel.findById(req.params.id);
        APIResponse({
          res,
          Status: "",
          StatusCode: ResponseCode.OK,
          Message: "",
          Data: result,
        });
    } catch (err) {
      APIResponse({
        res,
        Status: "",
        StatusCode: ResponseCode.Bad_Request,
        Message: "",
        Data: err,
      });
    }
  }
);


router.post(  "/",  async (req: RequestInterface, res: Response, next: NextFunction) => {
  try {
    delete req.body["_id"]
    console.log(req.body) 
    let result = await UserModel.create(req.body);
    
    APIResponse({
      res,
      Status: "User created successfully",
      StatusCode: ResponseCode.Created,
      Message: "User created successfully",
      Data: result,
    });
  } catch (err) {

    console.log(err)
    APIResponse({
      res,
      Status: "Failed to create user",
      StatusCode: ResponseCode.Internal_Server_Error,
      Message: "Failed to create user",
      Data: null,
    });
  }
}
);





router.put(  "/:id",  async (req: Request, res: Response, next: NextFunction) => {
  try {

    delete req.body["_id"]
    let updatedUser = await UserModel.findOneAndUpdate( { _id: req.params.id }, req.body, { new: true } );
    if (!updatedUser) {
      APIResponse({
        res,
        Status: "User not found'",
        StatusCode: ResponseCode.Not_Found,
        Message: "User not found",
        Data: null,
      });
    }


    APIResponse({
      res,
      Status: "User updated successfully",
      StatusCode: ResponseCode.OK,
      Message: "User updated successfully",
      Data: updatedUser,
    });
  } catch (err) {
    APIResponse({
      res,
      Status: "Failed to update user",
      StatusCode: ResponseCode.Internal_Server_Error,
      Message: "Failed to update user",
      Data: null,
    });
  }
}
);



router.delete(  "/:id",  async (req: Request, res: Response, next: NextFunction) => {
  try {

    let deletedUser  = await UserModel.findByIdAndDelete( req.params.id);
    if (!deletedUser) {
      APIResponse({
        res,
        Status: "User not found'",
        StatusCode: ResponseCode.Not_Found,
        Message: "User not found",
        Data: null,
      });
    }


    APIResponse({
      res,
      Status: "User deleted  successfully",
      StatusCode: ResponseCode.OK,
      Message: "User deleted  successfully",
      Data: deletedUser ,
    });
  } catch (err) {
    APIResponse({
      res,
      Status: "Failed to deleted  user",
      StatusCode: ResponseCode.Internal_Server_Error,
      Message: "Failed to deleted user",
      Data: null,
    });
  }
}
);
module.exports = router;
