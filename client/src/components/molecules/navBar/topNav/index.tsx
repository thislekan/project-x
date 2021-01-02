import React from "react";
import { Anchor } from "../../../atoms/texts";
import { SimpleButton } from "../../../atoms/buttons";
import { FlexRow } from "../../../atoms/wrappers";

const TopNav = () => (
  <div className="topnav-content">
    <FlexRow addClass="topnav-content__wrapper">
      <div className="topnav-content__wrapper__left-div">
        <Anchor text="Project-x" route="/" />
      </div>
      <div className="topnav-content__wrapper__mid-div">
        <Anchor text="Inspiration" route="/inspiration" addClass="inspiration" />
        <Anchor text="Credits" route="/credits" addClass="credits" />
      </div>
      <div className="topnav-content__wrapper__right-div">
        <SimpleButton content="Log in" />
      </div>
    </FlexRow>
  </div>
);

export default TopNav;
