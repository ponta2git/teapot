import React from "react";

interface DrawerContentProps {
    children?: React.ReactNode;
}

const DrawerContent: React.VFC<DrawerContentProps> = ({ children }) => {
    return (
        <div
            className={`
        h-[calc(100%-3.25rem)]
        bg-gray-200
        mx-2
        mt-2
        rounded-t-sm
    `}
        >
            {children}
        </div>
    );
};

export default DrawerContent;
