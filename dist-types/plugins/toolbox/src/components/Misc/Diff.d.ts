import React from 'react';
export type MonacoLanguages = {
    name: string;
    extensions: string[];
};
type SampleButtonProps = {
    sample: string[];
    setInput: (input: string[]) => void;
};
export declare const SampleButton: (props: SampleButtonProps) => React.JSX.Element;
declare function Diff(): React.JSX.Element;
export default Diff;
