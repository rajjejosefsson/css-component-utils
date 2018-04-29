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
    "Alert",
    withInfo()(() => {
      const isDisabled = boolean("Disabled", false);
      const message = text("Message", "Alert message goes here");

      const alertTypeOptions = {
        Info: "alert--info",
        Success: "alert--success",
        Warning: "alert--warning",
        Error: "alert--error "
      };

      const alertPositionOptions = {
        Top: "alert--top",
        Bottom: "alert--bottom"
      };

      const alertType = selectV2(
        "Type",
        alertTypeOptions,
        alertTypeOptions.Info
      );
      const alertPosition = selectV2(
        "Position",
        alertPositionOptions,
        alertPositionOptions.Top
      );

      return (
        <div className={`alert ${alertType} ${alertPosition}`}>{message}</div>
      );
    })
  );
