import React, { ReactNode } from 'react';
import Sidebar from '@/components/widgets/sidebar/Sidebar';

export interface BaseLayoutProps {
    children?: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => (
    <>
        <Sidebar
            blogName="Salim Fliou"
            description="Journal"
            githubPage="https://github.com/LeFilou"
            linkedinPage="https://www.linkedin.com/in/salim-fliou/"
            sidebarLinks={[
                { title: 'Home', href: '/' },
                { title: 'About', href: '/about' },
            ]}
        />
        <main className="lg:ml-96 md:ml-80 md:mt-0 mt-80 ml-0 px-6 py-10 md:py-20 md:px-16">
            {children}
        </main>
    </>
);

export default BaseLayout;
