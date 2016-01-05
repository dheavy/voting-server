import {List, Map} from 'immutable';
import {expect} from 'chai';
import {setEntries} from '../src/core';

describe('Application logic', () => {
  describe('setEntries', () => {
    it('adds the entries to the state', () => {
      const state = Map(),
            entries = List.of('Trainspotting', '28 Days Later'),
            nextState = setEntries(state, entries);

      expect(nextState).to.equal(Map({
        entries: List.of('Trainspotting', '28 Days Later')
      }));
    });

    it('converts to immutable', () => {
      const state = Map(),
            entries = ['Trainspotting', '28 Days Later'],
            nextState = setEntries(state, entries);

      expect(nextState).to.equal(Map({
        entries: List.of('Trainspotting', '28 Days Later')
      }));
    });
  });
});
