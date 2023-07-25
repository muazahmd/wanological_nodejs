
let env = null;
env = require('./dev.json');

// global types
type str = string; // Define a type for strings

type GeneralGlobalStringDataType = {
    MongoDB_URL: str; // Define a type for MongoDB URL
    API_Allowed_URL: str; // Define a type for APP URL
    JWT_Secret: str; // Define a type for JWT Secret
}

/* This code is exporting a constant named `GeneralGlobalStringData` that is of type
`GeneralGlobalStringDataInterface`. It contains two properties: `MongoDB_URL` and `APP_URL`. */
export const GeneralGlobalStringData : GeneralGlobalStringDataType = Object.freeze({
    MongoDB_URL: String(process.env.BACKEND_MONGOURL || env['BACKEND_MONGOURL']), // Get MongoDB URL from .env file
    API_Allowed_URL : String(process.env.LIVE_URL|| env['LIVE_URL']), // Main URL for this APP
    JWT_Secret : String(process.env.JWT_Secret|| env['JWT_Secret']) // Get JWT Secret from .env file
})


export enum GeneralGlobalNumberData {
    PORT = Number(process.env.BACKEND_PORT)||env['BACKEND_PORT'] || 3000 // Get PORT from .env file
}
// global Response code
export enum ResponseCode {
    continue = 100,
    Switching_Protocols = 101,
    Processing = 102,
    OK = 200,
    Created = 201,
    Accepted = 202,
    No_Content = 204,
    Moved_Permanently = 301,
    Found = 302,
    See_Other = 303,
    Not_Modified = 304,
    Temporary_Redirect = 307,
    Permanent_Redirect = 308,
    Bad_Request = 400,
    Unauthorized = 401,
    Forbidden = 403,
    Not_Found = 404,
    Not_Allowed = 405,
    Conflict = 409,
    Im_a_Teapot = 418,
    Internal_Server_Error = 500,
    Not_Implemented = 501,
    Bad_Gateway = 502,
    Service_Unavailable = 503,
    Gateway_Timeout = 504,
    Network_Authentication_Required = 511
}