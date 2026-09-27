import { PortableTextReactComponents } from '@portabletext/react';
import { Refractor, registerLanguage } from 'react-refractor';
import java from 'refractor/java';
import js from 'refractor/javascript';
import typescript from 'refractor/typescript';
import tsx from 'refractor/tsx';
import kotlin from 'refractor/kotlin';
import yaml from 'refractor/yaml';

registerLanguage(java);
registerLanguage(js);
registerLanguage(typescript);
registerLanguage(tsx);
registerLanguage(kotlin);
registerLanguage(yaml);

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