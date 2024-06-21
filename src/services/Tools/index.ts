import Express from "express";

import { ToolsController } from "../../controllers/Tools/ToolsController";
import { ToolsRepository } from "../../repositories/implements/Tools/ToolsRepository";
import { ToolsRoutes } from "../../routes/Tools/toolsRoutes.routes";
import { ToolsServices } from "./ToolsServices";

const router = Express.Router();
const toolsRepository = new ToolsRepository();
const toolsServices = new ToolsServices(toolsRepository);
const toolsController = new ToolsController(toolsServices);
const toolsRoutes = new ToolsRoutes(router, toolsController);

export default toolsRoutes;
export { toolsRepository, toolsServices, toolsController };