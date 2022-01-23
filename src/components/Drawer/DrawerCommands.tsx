import React from "react";
import Button from "../Button";

export interface DrawerCommandsProps {
    onClickCancel?: React.MouseEventHandler<HTMLSpanElement>;
    onClickSave?: React.MouseEventHandler<HTMLButtonElement>;
}

const DrawerCommands: React.VFC<DrawerCommandsProps> = (props) => {
    return (
        <div
            className={`
        m-2
        flex
        items-center
        justify-between
    `}
        >
            <p>
                <span className={`text-gray-200`} onClick={props.onClickCancel}>
                    キャンセル
                </span>
            </p>
            <Button onClick={props.onClickSave}>保存</Button>
        </div>
    );
};

export default DrawerCommands;
