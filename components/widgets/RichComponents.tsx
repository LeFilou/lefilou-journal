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
    };
}

export const RichTextComponents: Partial<PortableTextReactComponents> = {
    block: {
        h1: ({ children }) => (
            <h1 className="mt-14 mb-5 text-4xl font-bold tracking-tight text-gray-900">
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2 className="mt-14 mb-4 text-3xl font-bold tracking-tight text-gray-900">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-gray-900">
                {children}
            </h3>
        ),
        h4: ({ children }) => (
            <h4 className="mt-10 mb-3 text-xl font-bold text-gray-900">
                {children}
            </h4>
        ),
        normal: ({ children }) => (
            <p className="my-5 font-serif text-lg leading-8 text-gray-700">
                {children}
            </p>
        ),
        blockquote: ({ children }) => (
            <blockquote className="my-8 rounded-r-md border-l-4 border-gray-800 bg-gray-50 px-6 py-4 font-serif text-lg leading-8 text-gray-700">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }) => (
            <ul className="my-6 list-disc space-y-3 pl-6 marker:text-gray-400">
                {children}
            </ul>
        ),
        number: ({ children }) => (
            <ol className="my-6 list-decimal space-y-3 pl-6 marker:text-gray-400">
                {children}
            </ol>
        ),
    },
    listItem: ({ children }) => (
        <li className="pl-2 font-serif text-lg leading-8 text-gray-700">
            {children}
        </li>
    ),
    marks: {
        strong: ({ children }) => (
            <strong className="font-bold text-gray-900">{children}</strong>
        ),
        link: ({ children, value }) => (
            <a
                href={value?.href}
                className="text-gray-900 underline decoration-gray-300 underline-offset-4 transition-colors hover:decoration-gray-900"
            >
                {children}
            </a>
        ),
        code: ({ children }) => (
            <code className="rounded bg-gray-100 px-1.5 py-0.5 font-[ui-monospace,monospace] text-[0.875em] text-gray-900">
                {children}
            </code>
        ),
    },
    types: {
        codeField: ({ value }: CodeProps) => {
            return (
                <div className="my-8 overflow-hidden rounded-lg text-sm">
                    <Refractor language={value.language} value={value.code} />
                </div>
            );
        },
    },
};
