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
    "Input",
    withInfo()(() => {
      const placeholder = text("Placeholder", "Search...");

      return <input className="input" placeholder={placeholder} />;
    })
  );
