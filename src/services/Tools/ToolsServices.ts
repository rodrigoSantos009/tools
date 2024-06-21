import { Tool } from "../../entities/Tool";
import { ICreate, IUpdate } from "../../interfaces/Tools/ToolsInterface";
import { IToolsRepository } from "../../repositories/Tools/IToolsRepository";

export class ToolsServices {
  constructor(private toolsRepository: IToolsRepository) {}

  async create({ title, link, description, tags }: ICreate) {
    const findTool = await this.toolsRepository.getByTitle(title);

    if (findTool) {
      throw new Error("Tools already exists!");
    }

    const tool = new Tool(title, link, description, tags);

    await this.toolsRepository.createTool(tool);

    return tool;
  }

  async getTools() {
    const findTools = await this.toolsRepository.getTools();

    if (!findTools) {
      throw new Error("There are no tools!");
    }

    return findTools;
  }

  async updateTool(id: string, data: IUpdate) {
    const findTool = await this.toolsRepository.getById(id);

    if (!findTool) {
      throw new Error("Tool not found!");
    }

    if(data.tags) {
      const { tags } = findTool;
      const existingTags = new Set(tags);
      data.tags.forEach(tag => existingTags.add(tag));
      data.tags = Array.from(existingTags);
    }

    await this.toolsRepository.updateTool(id, data);
  }

  async getByTitle(title: string): Promise<Tool | null> {
    const findTool = await this.toolsRepository.getByTitle(title);

    if (!findTool) {
      throw new Error("There are no tools!");
    }

    return findTool;
  }

  async getByTag(tag: string): Promise<Tool[] | null> {
    const findTool = await this.toolsRepository.getByTag(tag);

    if (!findTool) {
      throw new Error("There are no tools!");
    }

    return findTool;
  }

  async getById(id: string): Promise<Tool | null> {
    const findTool = await this.toolsRepository.getById(id);

    if (!findTool) {
      throw new Error("Tool not found!");
    }

    return findTool;
  }

  async removeById(id: string) {
    await this.toolsRepository.removeById(id);
  }
}