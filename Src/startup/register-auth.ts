  import JWTVerifyMiddleware from  '../Middleware/Auth/JWTVerifyMiddleware';

function registerAuth(app:any) {

    app.use(JWTVerifyMiddleware);

}

export default registerAuth;
