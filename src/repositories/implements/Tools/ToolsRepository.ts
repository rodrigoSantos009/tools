import { IUpdate } from "src/interfaces/Tools/ToolsInterface";
import { prisma } from "../../../database/prisma";
import { Tool } from "../../../entities/Tool";
import { IToolsRepository } from "../../Tools/IToolsRepository";

class ToolsRepository implements IToolsRepository {
  async createTool(tool: Tool): Promise<void> {
    await prisma.tool.create({
      data: {
        title: tool.title,
        link: tool.link,
        description: tool.description,
        tags: tool.tags,
      },
    });
  }

  async getTools(): Promise<Tool[]> {
    return await prisma.tool.findMany();
  }

  async updateTool(id: string, data: IUpdate): Promise<void> {
    await prisma.tool.update({
      where: {
        id
      },
      data: data
    });
  }

  async getByTitle(title: string): Promise<Tool | null> {
    const tool = await prisma.tool.findFirst({
      where: {
        title,
      },
    });

    return tool;
  }

  async getByTag(tag: string): Promise<Tool[] | null> {
    const tool = await prisma.tool.findMany({
      where: {
        tags: {
          has: tag,
        },
      },
    });

    return tool;
  }

  async getById(id: string): Promise<Tool | null> {
    const tool = await prisma.tool.findUnique({
      where: {
        id
      },
    });

    return tool;
  }

  async removeById(id: string): Promise<void> {
    await prisma.tool.delete({
      where: {
        id,
      },
    });
  }
}

export { ToolsRepository };