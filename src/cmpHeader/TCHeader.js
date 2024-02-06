import React, { useRef } from "react";
import TCMenu from "./TCMenu.js";
import TCShellBar from "./TCShellBar.js";

const TCHeader = function (props) {
 

  return (
    <div id="tHeader">
      <TCMenu />
      <TCShellBar />
    </div>
  );
}

export default TCHeader;