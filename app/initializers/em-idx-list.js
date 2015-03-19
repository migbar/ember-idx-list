import Em from 'ember';
import IdxConfig from 'ember-idx-utils/config'

export default {
  name: 'ember-idx-list',
  initialize: function() {
    if (!Em.IdxConfig) {
        Em.IdxConfig = IdxConfig.create()
    }
  }
};