// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.
// @TODO - we can add this once jquery is removed
// "use strict";

/// <reference path="../../../typings/jquery.d.ts"/>

namespace fabric {

  /**
   * Pivot Plugin
   *
   * Adds basic demonstration functionality to .ms-Pivot components.
   *
   */
  export class Pivot {

    /**
     *
     * @param {HTMLElement} container - the target container for an instance of Pivot
     * @constructor
     */
    constructor(container: HTMLElement) {
      let $pivotContainer = $(container);

      /** When clicking/tapping a link, select it. */
      $pivotContainer.on("click", ".ms-Pivot-link", function(event) {
        event.preventDefault();
        /** Check if current selection has elipses child element **/
        let $elipsisCheck = $(this).find(".ms-Pivot-ellipsis");

        /** Only execute when no elipses element can be found **/
        if ($elipsisCheck.length === 0) {

          $(this).siblings(".ms-Pivot-link").removeClass("is-selected");
          $(this).addClass("is-selected");
        }
      });
    }
  }
}
