import React from 'react';
import { mount } from 'enzyme';
import Mutation from '../mutation'
import Relay from 'react-relay';
import relayTestingUtils from '../../index.js'

const fixtures = {
  story: {
    comments: [],
    id: '42',
  }
}


test('Test mutation', () => {
  const spy = jest.fn();
  Relay.Store.mockCommitUpdate(spy)

  const container = mount(
      relayTestingUtils.relayWrap(<Mutation {...fixtures} />)
  );

  const input = container.find('#comment-input')
  const form = container.find('form')
  const list = container.find('#comment-list')
  input.node.value = 'abc'
  form.simulate('submit');
  expect(input.node.value).toBe('')
  expect(spy.mock.calls[0][0].getVariables().text).toBe('abc')

});
