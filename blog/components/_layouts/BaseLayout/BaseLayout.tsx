import React, { ReactNode } from 'react';

type Props = {
    children?: ReactNode;
};

const BaseLayout = ({ children }: Props) => (
    <div tw="w-full">
        <main tw="w-full">{children}</main>
    </div>
);

export default BaseLayout;
