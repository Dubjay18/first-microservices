import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { useExpressServer } from "routing-controllers";
import path from "path";
export class ExpressConfig {
  app: express.Express;
  constructor() {
    this.app = express();
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(
      bodyParser.urlencoded({ extended: false })
    );
    this.setUpControllers();
  }
  setUpControllers() {
    const controllersPath = path.resolve(
      "dist",
      "controllers"
    );
    /*useExpressServer has lots of options, can be viewed at
node_modules\routingcontrollers\RoutingControllersOptions.d.ts*/
    useExpressServer(this.app, {
      controllers: [controllersPath + "/*.js"],
    });
  }
}
