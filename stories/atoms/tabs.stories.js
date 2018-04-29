import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import {
  withKnobs,
  text,
  boolean,
  number,
  selectV2
} from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";

storiesOf("Stories", module)
  .addDecorator(withKnobs)
  .add(
    "Tabs",
    withInfo()(() => {
      return (
        <div className="tabs--regular">
          <div className="tabs__item">
            <p className="tabs__label">Text</p>
          </div>
          <div className="tabs__item">
            <p className="tabs__label">Text</p>
          </div>
        </div>
      );
    })
  );
