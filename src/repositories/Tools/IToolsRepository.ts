import { IUpdate } from "src/interfaces/Tools/ToolsInterface";
import { Tool } from "../../entities/Tool";

export interface IToolsRepository {
  createTool(tool: Tool): Promise<void>;
  getTools(): Promise<Tool[]>;
  updateTool(id: string, data: IUpdate): Promise<void>;
  getByTitle(title: string): Promise<Tool | null>;
  getByTag(tag: string): Promise<Tool[] | null>;
  getById(id: string): Promise<Tool | null>;
  removeById(id: string): Promise<void>;
}