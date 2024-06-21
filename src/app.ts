import express, { Application } from "express";
import cors from "cors";

import toolsRoutes from "./services/Tools";


import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";

class App {
  private app: Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.termsOfService();
    this.setupRoutes();
    this.documentation();
  }

  private middlewares(): void {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  listenServer() {
    this.app.listen(3000, () => console.log("server running!"));
  }

  setupRoutes() {
    this.app.use(toolsRoutes.router);
  }

  private termsOfService(): void {
    this.app.get("/terms", (req, res) => {
      return res.json({
        message: "Termos de serviço"
      });
    });
  }

  private documentation(): void {
    this.app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  }
}

const app = new App();

export { app };