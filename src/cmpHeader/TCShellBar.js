import React, { useRef } from "react";
import { ShellBar, ShellBarItem, Button } from "@ui5/webcomponents-react";

const TCShellBar = function (props) {

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

  const handleFeedbackItemClick = () => {
    window.open(props.shellbarFeedbackConfig, "_blank", "noreferrer");
  };

  const handleTicketItemClick = () => {
    window.open(props.shellbarTicketConfig, "_blank", "noreferrer");
  };

  return (
      <ShellBar
        logo={<img style={{ height: "100%" }} slot="logo" src={props.logo} alt="sap-logo" />}
        primaryTitle={props.APP_TITLE}
        onProfileClick={(e) => {
          menuProfileOpen(e.detail.targetRef);
        }}
      >
        <ShellBarItem
          id="shellbar-feedback-btn"
          data-testid="shellbar-feedback-btn"
          icon="feedback"
          primaryTitle={props.GIVE_FEEDBACK}
          onClick={handleFeedbackItemClick}
        />
        <ShellBarItem
          id="shellbar-ticket-btn"
          data-testid="shellbar-ticket-btn"
          icon="message-popup"
          primaryTitle={props.GET_SUPPORT}
          onClick={handleTicketItemClick}
        />
        {
          props.showOpenHelpButton &&
          <ShellBarItem
            id="open-help-item"
            data-testid="open-help-item"
            icon="sys-help"
            primaryTitle={props.OPEN_INAPPHELP}
          />
        }
        <Button
          id="shellbar-open-menu-btn"
          data-testid="shellbar-open-menu-btn"
          icon="employee"
          slot="profile"
          primaryTitle={props.APP_SETTINGS}
        />
      </ShellBar>
  );
}

export default TCShellBar;