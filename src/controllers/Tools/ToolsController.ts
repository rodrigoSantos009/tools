import { Request, Response } from "express";
import { ToolsServices } from "../../services/Tools/ToolsServices";

export class ToolsController {
  constructor(private toolsServices: ToolsServices) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { title, link, description, tags } = req.body;
    
    try {
      const tool = this.toolsServices.create({
        title,
        link,
        description,
        tags,
      });

      return res.status(201).json(tool);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async getTools(req: Request, res: Response): Promise<Response> {
    try {
      const tools = await this.toolsServices.getTools();

      return res.status(200).json(tools);
    } catch (error) {
      return res.status(400).json();
    }
  }

  async updateTool(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const data = req.body;
    console.log(id, data);
    try {
      await this.toolsServices.updateTool(id, data);

      return res.status(200).json({
        status: "success",
        message: "updated"
      });
    } catch (error) {
      return res.status(500).json({
        status: "faild",
        message: error
      });
    }
  }

  async getByTitle(req: Request, res: Response): Promise<Response> {
    const title = req.query.title as string;

    try {
      const tool = await this.toolsServices.getByTitle(title);

      return res.status(200).json(tool);
    } catch (error) {
      return res.status(400).json();
    }
  }

  async getByTag(req: Request, res: Response): Promise<Response> {
    const tag = req.query.tag as string;

    try {
      const tool = await this.toolsServices.getByTag(tag);

      return res.status(200).json(tool);
    } catch (error) {
      return res.status(400).json();
    }
  }

  async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const tool = await this.toolsServices.getById(id);

      return res.status(200).json(tool);
    } catch (error) {
      return res.status(400).json();
    }
  }

  async deleteById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      await this.toolsServices.removeById(id);

      return res.status(200).json();
    } catch (error) {
      return res.status(400).json();
    }
  }
}