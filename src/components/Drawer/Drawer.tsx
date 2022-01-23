import React from "react";
import TextBox from "../TextBox";
import DrawerCommand, { DrawerCommandsProps } from "./DrawerCommands";
import DrawerContent from "./DrawerContent";

interface DrawerProps {
    visible: boolean;
    commands?: DrawerCommandsProps;
}

const Drawer: React.VFC<DrawerProps> = ({ commands, visible }) => {
    return (
        <div
            className={`
        z-20
        absolute
        ${visible ? `visible` : `invisible`}
        ${visible ? `top-1/4` : `top-full`}
        left-[10%]
        w-[80%]
        ${visible ? `h-3/4` : `h-0`}
        shadow-md
        rounded-t-md
        transition-all
        duration-300
        overflow-y-scroll
        bg-gradient-to-b
        from-[color:#D0B49F]
        to-[color:#A47551]
        
    `}
        >
            <DrawerCommand
                onClickCancel={commands?.onClickCancel}
                onClickSave={commands?.onClickSave}
            />
            <DrawerContent>
                <div className={`flex justify-center`}>
                    <TextBox placeholder="茶葉の名前" />
                </div>
            </DrawerContent>
        </div>
    );
};

export default Drawer;
