import React from "react";
import { LargeHeader, Span, Paragraph } from "../../atoms/texts";
import { FlexRow, FlexColumn } from "../../atoms/wrappers";
import { SimpleButton } from "../../atoms/buttons";

const LandingTemplate = () => {
  const loginClick = async () => {
    const { navigateToBackend } = await import("../../../utils/shared");

    if (!navigateToBackend) return console.log("navigate to backend does not exist");
    return navigateToBackend("/login");
  };

  return (
    <div className="land-temp">
      <div className="land-temp__wrapper">
        <section className="land-temp__wrapper__sect1">
          <FlexColumn>
            <LargeHeader text="Host Virtual Events" addClass="bg-title" />
            {/* <LargeHeader text="Second world war" /> */}

            <FlexRow addClass="bracket-txt">
              [<Span text="Project-x" addClass="green-txt" />]
              <Paragraph text="POWERED BY SPOTIFY" addClass="powered" />
            </FlexRow>

            <SimpleButton addClass="login-btn" content="LOG IN WITH SPOTIFY" onClick={loginClick} />
          </FlexColumn>
        </section>
      </div>
    </div>
  );
};

export default LandingTemplate;
