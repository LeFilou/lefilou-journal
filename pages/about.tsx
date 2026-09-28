import { getClient } from '../lib/sanity.server';
import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from '@portabletext/types';
import { GetStaticProps } from 'next';
import { aboutQuery } from '../lib/queries';
import { RichTextComponents } from '@/components/widgets/RichComponents';
import Seo from '@/components/widgets/seo/Seo';

export interface AboutPageProps {
    portableTextBlocks: PortableTextBlock[];
}

const AboutPage = ({ portableTextBlocks }: AboutPageProps) => {
    return (
        <>
            <Seo title="About" path="/about" />
            <PortableText
                value={portableTextBlocks}
                components={RichTextComponents}
            />
        </>
    );
};
export const getStaticProps: GetStaticProps<AboutPageProps> = async () => {
    const portableTextBlocks: PortableTextBlock[] =
        await getClient().fetch(aboutQuery);
    return { props: { portableTextBlocks } };
};

export default AboutPage;
