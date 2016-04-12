// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.
// @TODO - we can add this once jquery is removed
// "use strict";

/// <reference path="../../../typings/jquery.d.ts"/>

namespace fabric {
  /**
   * Persona Card Plugin
   *
   * Adds basic demonstration functionality to .ms-PersonaCard components.
   *
   */
  export class PersonaCard {

    /**
     *
     * @param {HTMLElement} container - the target container for an instance of PersonaCard
     * @constructor
     */
    constructor(container: HTMLElement) {
      let $personaCard = $(container);

      /** When selecting an action, show its details. */
      $personaCard.on("click", ".ms-PersonaCard-action", function() {

        /** Select the correct tab. */
        $personaCard.find(".ms-PersonaCard-action").removeClass("is-active");
        $(this).addClass("is-active");

        /** Function for switching selected item into view by adding a class to ul. */
        let updateForItem = function(wrapper, item) {
          let previousItem = wrapper.className + "";
          let detail = item.charAt(0).toUpperCase() + item.slice(1);
          let nextItem = "ms-PersonaCard-detail" + detail;
          if (previousItem !== nextItem) {
            wrapper.classList.remove(previousItem);
            wrapper.classList.add(nextItem);
          }
        };

        /** Get id of selected item */
        let el = $(this).attr("id");
        /** Add detail class to ul to switch it into view. */
        updateForItem($(this).parent().next().find("#detailList")[0], el);

        /** Display the corresponding details. */
        let requestedAction = $(this).attr("id");
        $personaCard.find(".ms-PersonaCard-actionDetails").removeClass("is-active");
        $personaCard.find("#" + requestedAction + ".ms-PersonaCard-actionDetails").addClass("is-active");

      });

      /** Toggle more details. */
      $personaCard.on("click", ".ms-PersonaCard-detailExpander", function() {
        $(this).parent(".ms-PersonaCard-actionDetails").toggleClass("is-collapsed");
      });
    }
  }
}
