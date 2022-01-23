import React from "react";

const Button: React.VFC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
    children,
    onClick,
}) => {
    return (
        <button
            className={`
        bg-lime-600
        text-gray-200
        py-1
        px-3
        border-solid
        border-2
        border-lime-800
        outline-2
        outline-offset-2
        outline-gray-300
        rounded-md
        shadow-sm
        shadow-gray-500
        active:shadow-inner
    `}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
