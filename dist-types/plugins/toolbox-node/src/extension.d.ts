import { ToolRequestHandler } from './ToolRequestHandler';
export interface ToolboxToolExtensionPoint {
    addToolRequestHandler(requestHandler: ToolRequestHandler): void;
}
export declare const toolboxToolExtensionPoint: import("@backstage/backend-plugin-api").ExtensionPoint<ToolboxToolExtensionPoint>;
