export type ToolRequest = typeof globalThis extends {
    onmessage: any;
} ? {
    method?: string;
    headers?: Record<string, string>;
    body?: string | ArrayBuffer | ArrayBufferView | Blob | FormData | URLSearchParams | ReadableStream<Uint8Array> | null;
} : import('undici-types').RequestInit;
export type ToolResponse = typeof globalThis extends {
    onmessage: any;
} ? {
    readonly status: number;
    readonly statusText: string;
    readonly ok: boolean;
    readonly json: () => Promise<unknown>;
    readonly text: () => Promise<string>;
    readonly arrayBuffer: () => Promise<ArrayBuffer>;
} : import('undici-types').Response;
export interface ToolboxApi {
    getBackendTools(): Promise<string[]>;
    toolRequest(toolName: string, request: ToolRequest): Promise<ToolResponse>;
    toolJsonRequest(toolName: string, data: any): Promise<unknown>;
}
export declare const toolboxApiRef: import("@backstage/core-plugin-api").ApiRef<ToolboxApi>;
