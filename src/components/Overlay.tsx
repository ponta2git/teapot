import React from "react";

interface Props {
    visible: boolean;
    hide: () => void;
}

const Overlay: React.VFC<Props> = ({ visible, hide }) => {
    const handleClick = () => {
        hide();
    };

    return (
        <div
            className={`
        ${visible ? `visible` : `invisible`}
        ${visible ? `opacity-60` : `opacity-0`}
        transition-all
        bg-neutral-500
        absolute
        top-0
        left-0
        w-full
        h-full
        z-10`}
            onClick={handleClick}
        />
    );
};

export default Overlay;
