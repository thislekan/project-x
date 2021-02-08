import { SimpleButton } from "../../../atoms/buttons";
import { FlexColumn } from "../../../atoms/wrappers";

const SideBar = () => {
  return (
    <div className="sidebar">
      <FlexColumn addClass="sidebar__wrapper">
        <div className="sidebar__wrapper__anchor-wrapper">
          <SimpleButton content="MUSIC" />
          <div className="options-tray">
            <SimpleButton content="ARTIST" />
            <SimpleButton content="ALBUM" />
            <SimpleButton content="GENRE" />
          </div>
        </div>
        <div className="sidebar__wrapper__anchor-wrapper">
          <SimpleButton content="ANALYTICS" />
          <div className="options-tray">
            <SimpleButton content="TOP ARTISTs" />
            <SimpleButton content="TOP SONGS" />
          </div>
        </div>
      </FlexColumn>
    </div>
  );
};

export default SideBar;
