import { ToolRequestHandler } from '@drodil/backstage-plugin-toolbox-node';
import { Request, Response } from 'express';
export declare class WhoisHandler implements ToolRequestHandler {
    getToolName(): string;
    handleRequest(request: Request<any>, response: Response): Promise<void>;
}
