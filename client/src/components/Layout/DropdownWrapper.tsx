import React from 'react';
import {Dropdown, type MenuProps} from "antd";

type Props = {
    children: React.ReactNode,
    dropDownData: MenuProps['items'],
}
const DropDownNavItem = ({children, dropDownData}: Props) => {
    return (
        <Dropdown menu={{items: dropDownData}}>
            {children}
        </Dropdown>
    );
};

export default DropDownNavItem;
