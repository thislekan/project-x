import React from 'react';
import { LargeHeader, Span, Paragraph } from '../../atoms/texts';
import { FlexRow, FlexColumn } from '../../atoms/wrappers';
import { SimpleButton } from '../../atoms/buttons';

const LandingTemplate = () => {
  const loginClick = () => console.log('Heyy');

  return (
    <div className="lan-temp">
      <div className="lan-temp__wrapper">
        <FlexColumn>
          <LargeHeader text="New world order" />
          <LargeHeader text="Second world war" />

          <FlexRow>
            [<Span text="Random Text" />]
            <Paragraph text="POWERED BY SPOTIFY" />
          </FlexRow>

          <SimpleButton content="LOG IN WITH SPOTIFY" onClick={loginClick} />
        </FlexColumn>
      </div>
    </div>
  );
};

export default LandingTemplate;
