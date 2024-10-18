import { LoggerService } from '@backstage/backend-plugin-api';
import express from 'express';
import { ToolRequestHandler } from '@drodil/backstage-plugin-toolbox-node';
import { Config } from '@backstage/config';
export interface RouterOptions {
    config: Config;
    logger: LoggerService;
    handlers: ToolRequestHandler[];
}
export declare function createRouter(options: RouterOptions): Promise<express.Router>;
