import React, { ReactElement } from 'react';
import { Tool } from '@drodil/backstage-plugin-toolbox-react';
export type ToolsPageProps = {
    /** extra custom local tools to add into the tool page */
    extraTools?: Tool[];
    /** A list of which tools to have by default. Defaults to defaultTools.*/
    tools?: Tool[];
    /** Allows for custom sorting of the categories in the sidebar. Defaults to alphabetic sort with Favorites at top. */
    categorySortFunction?: (category1: string, caregory2: string) => number;
    /** Allows for custom sorting of the tools within a category. Defaults to alphabetic sort. */
    toolSortFunction?: (tool1: Tool, tool2: Tool) => number;
    /** Filter tools to be shown in runtime */
    toolFilterFunction?: (tool: Tool) => boolean;
    /** customize the landing page */
    welcomePage?: ReactElement;
};
export declare const ToolsPage: (props: ToolsPageProps) => React.JSX.Element;
