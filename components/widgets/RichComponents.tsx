import { PortableTextReactComponents } from '@portabletext/react';
import Refractor from "react-refractor";
import java from "refractor/lang/java";
import js from "refractor/lang/javascript";
import typescript from "refractor/lang/typescript";
import tsx from "refractor/lang/tsx";
import kotlin from "refractor/lang/kotlin";
import yaml from "refractor/lang/yaml";

Refractor.registerLanguage(java);
Refractor.registerLanguage(js);
Refractor.registerLanguage(typescript);
Refractor.registerLanguage(tsx);
Refractor.registerLanguage(kotlin);
Refractor.registerLanguage(yaml);

interface CodeProps {
    value: {
        language: string;
        code: string;
    }
}

export const RichTextComponents: Partial<PortableTextReactComponents> = {
    block: {
        h1: ({ children }) => (
            <h1 className="text-4xl font-bold text-gray-800 mb-6">{children}</h1>
        ),
        normal: ({ children }) => <p className="text-xl my-3">{children}</p>,
    },
    types: {
        codeField: ({ value }: CodeProps) => {
            return (
                <Refractor language={value.language} value={value.code} />
            );
        },
    },
}