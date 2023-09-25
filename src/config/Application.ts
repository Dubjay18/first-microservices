import { Logger } from "winston";
import { ExpressConfig } from "./Express";

export class Application {
  server: any;
  express: ExpressConfig;
  constructor() {
    this.express = new ExpressConfig();
    const port = 3000;
    this.server = this.express.app.listen(port, () => {
      (Logger as any).info(`Server Started! Express:
   http://localhost:${port}`);
    });
  }
}
