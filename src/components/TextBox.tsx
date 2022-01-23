import React from "react";

type TextBoxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">;

const TextBox: React.VFC<TextBoxProps> = (props) => {
    return (
        <div
            className={`
            inline-block
        p-2
        bg-gray-200
        rounded-sm
    `}
        >
            <input
                type="text"
                {...props}
                className={`
            text-stone-800
            text-lg
            bg-gray-200
            outline-none
            rounded-none
            border-b-2
            border-b-[color:#D0B49F]
            `}
            />
        </div>
    );
};

export default TextBox;
