import { ToolboxApi, ToolRequest, ToolResponse } from './ToolboxApi';
import { DiscoveryApi, FetchApi } from '@backstage/core-plugin-api';
export declare class ToolboxClient implements ToolboxApi {
    private readonly fetchApi;
    private readonly discoveryApi;
    constructor(options: {
        fetchApi: FetchApi;
        discoveryApi: DiscoveryApi;
    });
    getBaseUrl(): Promise<string>;
    getBackendTools(): Promise<string[]>;
    toolRequest(toolName: string, request: ToolRequest): Promise<ToolResponse>;
    toolJsonRequest(toolName: string, data: any): Promise<unknown>;
}
