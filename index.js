/*jshint node:true*/
const EngineAddon = require('ember-engines/lib/engine-addon');
'use strict';

module.exports = EngineAddon.extend({
  name: 'template-manager',
  lazyLoading: true
});
