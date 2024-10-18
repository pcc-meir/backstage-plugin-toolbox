/// <reference types="react" />
export declare const toolboxPlugin: import("@backstage/core-plugin-api").BackstagePlugin<{
    root: import("@backstage/core-plugin-api").RouteRef<undefined>;
}, {}, {}>;
export declare const ToolboxPage: (props: import("./components/Root").ToolsPageProps) => import("react").JSX.Element;
export declare const ToolboxHomepageCard: (props: import("@backstage/plugin-home-react").CardExtensionProps<{
    toolId?: string | undefined;
}>) => import("react").JSX.Element;
