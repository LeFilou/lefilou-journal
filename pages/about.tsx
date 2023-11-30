import client from '../client';
import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from '@sanity/types';
import { GetStaticProps } from 'next';
import { PortableTextReactComponents } from '@portabletext/react/src/types';

export interface AboutPageProps {
    portableTextBlocks: PortableTextBlock[];
}

const AboutPage = ({ portableTextBlocks }: AboutPageProps) => {
    return <PortableText value={portableTextBlocks} components={componentsRenderer} />;
};
export const getStaticProps: GetStaticProps<AboutPageProps> = async () => {
    const portableTextBlocks: PortableTextBlock[] = await client.fetch(
        `*[_type == "about"][0].about`,
        {},
    );
    return { props: { portableTextBlocks } };
};

const componentsRenderer: Partial<PortableTextReactComponents> = {
    block: {
        h1: ({ children }) => (
            <h1 tw="text-4xl font-bold text-gray-800 mb-6">{children}</h1>
        ),
        normal: ({ children }) => <p tw="text-xl my-3">{children}</p>,
    },
};

export default AboutPage;
