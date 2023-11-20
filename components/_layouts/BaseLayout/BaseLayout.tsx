import React, { ReactNode } from 'react';
import Sidebar from '../../widgets/Sidebar/Sidebar';

export interface BaseLayoutProps {
    children?: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => (
    <>
        <Sidebar
            blogName="Lefilou"
            blogAuthor="Salim Fliou"
            description="Lefilou's personal journal"
            githubPage="https://github.com/LeFilou"
            linkedinPage="https://www.linkedin.com/in/salim-fliou/"
        />
        <main tw="lg:ml-96 md:ml-80 md:mt-0 mt-80 ml-0 ">{children}</main>
    </>
);

export default BaseLayout;
