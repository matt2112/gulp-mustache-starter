'use strict';

import $ from 'jquery';
import Mustache from 'mustache';

(function loadUser() {
  $.get('data/data.json', () => { })
    .done((data) =>
      $.get('templates/template.mst', (template) => {
        const rendered = Mustache.render(template, data);
        document.getElementById('target').innerHTML = rendered;
      }).fail(() => console.error('template not found'))
    )
    .fail(() => console.error('data not found'))
})();

console.log('all done');