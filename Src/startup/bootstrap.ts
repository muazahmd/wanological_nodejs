const express =require("express");
const path= require("path");
const cookieParser = require("cookie-parser");

const cors = require("cors");;

function bootstrap(app: any) {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use("/public", express.static(path.join(__dirname, "../public")));
  // app.use('/cdn', express.static(path.join(env.STATIC_CONTENT_PATH)));
}

export default bootstrap;
