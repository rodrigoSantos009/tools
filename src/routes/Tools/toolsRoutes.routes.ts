import { Router } from "express";
import { ToolsController } from "../../controllers/Tools/ToolsController";

class ToolsRoutes {
  constructor(
    public router: Router,
    private toolsController: ToolsController
  ) {
    this.getRoutes();
  }

  private getRoutes(): Router {
    this.router.get(
      "/tools/bytag",
      this.toolsController.getByTag.bind(this.toolsController)
    );

    this.router.post(
      '/tools',
      this.toolsController.handle.bind(this.toolsController)
    );

    this.router.put(
      '/tools/:id',
      this.toolsController.updateTool.bind(this.toolsController)
    );

    this.router.get(
      '/tools',
      this.toolsController.getTools.bind(this.toolsController)
    );

    this.router.get(
      '/tools/byTitle',
      this.toolsController.getByTitle.bind(this.toolsController)
    );

    this.router.get(
      "/tools/:id",
      this.toolsController.getById.bind(this.toolsController)
    );

    this.router.delete(
      '/tools/:id',
      this.toolsController.deleteById.bind(this.toolsController)
    );

    return this.router;
  }
}

export { ToolsRoutes };