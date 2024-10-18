import { ToolboxApi } from './api';
export declare const useBackendTools: () => string[];
export declare function useToolboxApi<T>(f: (api: ToolboxApi) => Promise<T>, deps?: any[]): import("react-use/lib/useAsyncFn").AsyncState<T>;
export declare const useToolboxTranslation: () => any;
