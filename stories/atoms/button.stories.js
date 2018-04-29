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
    "Button",
    withInfo()(() => {
      const isDisabled = boolean("Disabled", false);
      const title = text("Title", "Submit");

      const buttonTypeOptions = {
        Primary: "primary",
        Secondary: "secondary",
        Default: "tertiary",
        Negative: "negative",
        Deal: "deal"
      };

      const buttonSizeOptions = {
        Small: "small",
        Regular: "regular",
        Big: "big"
      };

      const buttonType = selectV2(
        "Type",
        buttonTypeOptions,
        buttonTypeOptions.Primary
      );
      const buttonSize = selectV2(
        "Size",
        buttonSizeOptions,
        buttonSizeOptions.Regular
      );

      return (
        <button
          className={`btn btn--${buttonType} btn--${buttonSize} ${
            isDisabled ? "btn--disabled" : ""
          }`}
        >
          {title}
        </button>
      );
    })
  );
