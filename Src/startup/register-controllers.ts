const fs = require("fs");
const path = require("path");

const routesPath = path.join(__dirname, "../routes");

const routes: any = [];

function registerRoutes(app: any) {
  getRoutes(routesPath);

  routes.forEach((route: string) => {
    let url = "" + path.parse(route.split("routes")[1]).dir.replace(/\\/g, "/");
    app.use(url, require(route));
  });
}

function getRoutes(directoryPath: string) {
  fs.readdirSync(directoryPath).forEach((file: any) => {
    let fullPath: string = path.join(directoryPath, file);

    if (fs.statSync(fullPath).isDirectory()) {
      getRoutes(fullPath);
    } else if (
      fullPath.endsWith(".controller.ts") &&
      path.extname(fullPath) == ".ts"
    ) {
      routes.push(fullPath);
    }
  });
}

export default registerRoutes;
