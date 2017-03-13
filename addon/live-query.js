import Ember from 'ember';
import ReadOnlyArrayProxy from './system/read-only-array-proxy';

const { get, set, computed, isArray } = Ember;

export default ReadOnlyArrayProxy.extend({
  _orbitCache: null,
  _query: null,
  _identityMap: null,
  _content: null,

  init(...args) {
    this._super(...args);

    this._orbitCache.on('patch', () => {
      // console.log('invalidate', patch);
      this.invalidate();
    });
  },

  invalidate() {
    set(this, '_content', null);
  },

  content: computed('_content', {
    get() {
      if (get(this, '_content') === null) {
        let results = this._orbitCache.query(this._query);

        let content;
        if (isArray(results)) {
          content = results.map(r => this._identityMap.lookup(r))
        } else if (typeof results === 'object') {
          content = Object.keys(results).map(r => this._identityMap.lookup(results[r]))
        }
        set(this, '_content', content);
      }
      return this._content;
    }
  })
});
