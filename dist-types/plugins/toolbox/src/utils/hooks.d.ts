export declare const useFavoriteStorage: () => string[];
export declare const useStyles: (params: void, muiStyleOverridesParams?: {
    props: Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"search" | "fullWidth" | "fullHeight" | "noPadding" | "noMargin" | "marginBottomSmall" | "marginLeftSmall" | "editorButtonGroup" | "toolsBar" | "menuTabs" | "tab" | "tabDivider" | "previewPaper" | "toolContainer", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
