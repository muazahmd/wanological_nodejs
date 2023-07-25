
import { sign, verify } from 'jsonwebtoken'; // Import JWT library
import { GeneralGlobalStringData,ResponseCode } from '../../../config/keys/GeneralKeys'; // Import General Global String Data

// Global types
type str = string; // Define a type for strings
type globe = any; // Define a type for global variables

export async function GenerateJWTtoken(payload: globe): Promise<str> {
    const TempPayload = JSON.stringify(payload); // Define a variable for payload
    const SignedToken: str = sign(TempPayload, GeneralGlobalStringData.JWT_Secret); // Generate JWT Token
    return SignedToken; // Return JWT Token
} // Generate JWT Token


export async function VerifyJWTtoken(token: str): Promise<globe> {
   try{
    const VerifiedToken: globe = verify(token, GeneralGlobalStringData.JWT_Secret); // Verify JWT Token
    return {
        status: ResponseCode.OK,
        message: "Valid Token",
        data: VerifiedToken
    }
   }
   catch (error) {
       return {
        status: ResponseCode.Unauthorized,
        message: "Invalid Token"
       }
   }
} // Verify JWT Token