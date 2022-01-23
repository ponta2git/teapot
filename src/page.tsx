import React, { useState } from "react";
import Overlay from "./components/Overlay";
import Button from "./components/Button";
import Drawer from "./components/Drawer/Drawer";
import { DrawerCommandsProps } from "./components/Drawer/DrawerCommands";

const Page: React.VFC = () => {
    const [modal, setModal] = useState(false);
    const setModeless = () => setModal(false);
    const handleClick = () => setModal(true);

    const drawerCommands: DrawerCommandsProps = {
        onClickCancel: () => {
            setModeless();
        },
    };

    return (
        <div
            className={`
            relative
            h-screen
            w-screen 
            bg-[color:#D0B49F]
        `}
        >
            <Drawer visible={modal} commands={drawerCommands} />
            <Overlay visible={modal} hide={setModeless} />
            <Button onClick={handleClick}>Click!</Button>
        </div>
    );
};

export default Page;
