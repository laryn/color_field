/**
 * @file
 * Javascript for Color Field.
 */
(function ($) {
  "use strict";

  Backdrop.behaviors.color_field_farbtastic = {
    attach: function (context) {
      $.each(Backdrop.settings.color_field_farbtastic, function (selector) {
        $('#' + this.picker_id).farbtastic('#' + this.id);
      });
    }
  };
})(jQuery);
