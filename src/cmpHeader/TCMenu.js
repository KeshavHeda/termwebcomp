import React, { useRef } from "react";
import {Menu, MenuItem } from "@ui5/webcomponents-react";

const TCMenu = function (props) {
  const menuProfileRef = useRef();

  const menuProfileOpen = (target) => {
    if (menuProfileRef.current) {
      menuProfileRef.current.showAt(target);
    }
  };

  const onMenuClick = (e) => {
    if (e.detail.item.dataset.testid === "appSettings") {
      setShowSetiingDialog(true);
    }
  };

  return (
    <>
      <Menu
        id="menuProfile"
        ref={menuProfileRef}
        onItemClick={(e) => onMenuClick(e)}
      >
        <MenuItem
          text={props.displayUserName}
        ></MenuItem>
      </Menu>
    </>
  );
};

export default TCMenu;