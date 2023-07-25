import { VerifyJWTtoken } from "../Security/JWT/JWTTokenGenerator"; // Import Verify JWT Token function

// import Global Response Code
import { ResponseCode} from "../../config/keys/GeneralKeys"; // Import Response Code
import { APIResponse } from "../../helper/APIResponse"; // Import Response function
import {PUBLIC_ENDPOINTS  } from '../../config/constant'
import { Request } from "express";
// global types
type str = string; // Define a type for strings
type globe = any; // Define a type for global variables

// global types for request



/**
 * This is a TypeScript middleware function that verifies a JWT token and returns an error message if
 * the token is invalid.
 * @param {Request} req - The `req` parameter is an object that represents the HTTP request made by the
 * client. It contains information such as the request method, headers, URL, and body.
 * @param {globe} res - The "res" parameter in the function signature represents the response object
 * that will be sent back to the client after the middleware has finished processing the request.
 * @param {globe} next - `next` is a function that is called to move to the next middleware function in
 * the chain. It is typically used in Express.js middleware functions to pass control to the next
 * middleware function.
 * @returns The JWTVerifyMiddleware function is returning a response object with a status code, status
 * message, message, and data. The specific values of these properties depend on the outcome of the JWT
 * token verification process. If the token is valid, the middleware will move to the next middleware.
 * If the token is invalid, the middleware will return a response object with a status code of 401
 * (Unauthorized), a status
 */
export default async function JWTVerifyMiddleware(req: Request, res: globe, next: globe) {
    try{
    //   if (PUBLIC_ENDPOINTS.includes(req.originalUrl)) {
        return next();
    //   }
        const token:any =  req.headers["x-auth-token"]; // Define a variable for token

        // Verify JWT Token
        const VerifyStatus = await VerifyJWTtoken(token);
        if(VerifyStatus.status === ResponseCode.OK){
            next(); // Move to next middleware
        }
        else if(VerifyStatus.status === ResponseCode.Unauthorized){
            return APIResponse({
                res,
                StatusCode: ResponseCode.Unauthorized,
                Status: "Invalid Token",
                Message: "Invalid Token Provided",
                Data: Object(null)
            })
        }
    }
    catch (error) {
        return APIResponse({
            res,
            StatusCode: ResponseCode.Unauthorized,
            Status: "Invalid Token",
            Message: "Invalid Token Provided",
            Data: Object(null)
        })
    }

} // JWT Verify Middleware