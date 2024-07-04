import { BadRequestError } from "../../helpers/api-errors";
import { Tool } from "../../entities/Tool";
import { ICreate, IUpdate } from "../../interfaces/Tools/ToolsInterface";
import { IToolsRepository } from "../../repositories/Tools/IToolsRepository";

export class ToolsServices {
  constructor(private toolsRepository: IToolsRepository) {}

  async create({ title, link, description, tags }: ICreate) {
    const findTool = await this.toolsRepository.getByTitle(title);

    if (findTool) {
      throw new Error("Ferrameta já existe!");
    }

    const tool = new Tool(title, link, description, tags);

    await this.toolsRepository.createTool(tool);

    return tool;
  }

  async getTools() {
    const findTools = await this.toolsRepository.getTools();

    return findTools;
  }

  async updateTool(id: string, data: IUpdate) {
    const findTool = await this.toolsRepository.getById(id);

    if (!findTool) {
      throw new Error("Ferramenta não encontrada!");
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
      throw new Error("Ferramenta não encontrada!");
    }

    return findTool;
  }

  async getByTag(tag: string): Promise<Tool[] | null> {
    const findTool = await this.toolsRepository.getByTag(tag);

    if (!findTool) {
      throw new Error("Ferramenta não encontrada!");
    }

    return findTool;
  }

  async getById(id: string): Promise<Tool | null> {
    const findTool = await this.toolsRepository.getById(id);

    if (!findTool) {
      throw new Error("Ferramenta não encontrada!");
    }

    return findTool;
  }

  async removeById(id: string) {
    const findTool = await this.toolsRepository.getById(id);

    if (!findTool) {
      throw new Error("Ferramenta não encontrada!");
    }

    await this.toolsRepository.removeById(id);
  }
}