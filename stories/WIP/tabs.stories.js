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

storiesOf("WIP", module)
  .addDecorator(withKnobs)
  .add(
    "Tabs",
    withInfo()(() => {
      return (
        <div class="tabs no-select tabs--filters">
          <ul role="tablist" class="tabs__list">
            <li role="tab" class="tabs__item tabs__item--active">
              <button class="tabs__label">Filtros populares</button>
            </li>
            <li role="tab" class="tabs__item">
              <button class="tabs__label" tabindex={-1}>
                Otros filtros
              </button>
            </li>
          </ul>
        </div>
      );
    })
  );
