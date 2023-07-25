const express = require("express");

const app = express();

import bootstrap from "./startup/bootstrap";

import registerAuth from "./startup/register-auth";
import registerRoutes from "./startup/register-controllers";

bootstrap(app);
registerAuth(app);
registerRoutes(app);

export default app;
