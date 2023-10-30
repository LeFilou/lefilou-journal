import React, { ReactNode } from 'react';
import Sidebar from '../../widgets/Sidebar/Sidebar';

export interface BaseLayoutProps {
    children?: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => (
    <>
        <Sidebar blogName="Lefilou" blogAuthor="Salim Fliou" description="Lefilou's personal journal"/>
        <main tw="sm:ml-64">{children}</main>
    </>
);

export default BaseLayout;

