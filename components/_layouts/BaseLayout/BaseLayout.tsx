import React, { ReactNode } from 'react';

export interface BaseLayoutProps {
    children?: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => (
    <div tw="w-full">
        <main tw="w-full">{children}</main>
    </div>
);

export default BaseLayout;
