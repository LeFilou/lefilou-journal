import React from 'react';

export interface SidebarProps {
    blogName: string;
    blogAuthor: string;
    description: string;
}

const Sidebar = ({ blogName, description, blogAuthor }: SidebarProps) => (
    <aside tw="fixed top-0 left-0 z-40 w-96 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-gray-50 dark:bg-gray-800">
        <div tw="h-full py-5 w-10/12 m-auto overflow-y-auto ">
            <div tw="absolute bottom-5 flex flex-col">
                <div tw="flex flex-col mb-5">
                    <span tw="text-7xl font-bold text-gray-100 font-abril">{blogName}</span>
                    <span tw="text-2xl my-3 text-gray-400">{description}</span>
                </div>
                <ul>
                    <li tw="text-xl my-2 text-gray-100">
                        <a href="#">Home</a>
                    </li>
                    <li tw="text-xl text-gray-100">
                        <a href="#">About</a>
                    </li>
                </ul>
                <span tw="text-2xl my-4 text-gray-400">{blogAuthor}</span>
            </div>
        </div>
    </aside>
);

export default Sidebar;
