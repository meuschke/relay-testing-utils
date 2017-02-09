import React from 'react';
import {mount} from 'enzyme';
import Container from '../container'
import relayTestingUtils from '../../index.js'

const fixtures = {
  test: {
    id: '007',
    text: 'Example test'
  }
}


test('Test fixture text', () => {

  const container = mount(
      relayTestingUtils.relayWrap(<Container {...fixtures} />)
  );

  expect(container.find('h1').text()).toEqual(fixtures.test.text);

});


test('Test show more', () => {

  const container = mount(
      relayTestingUtils.relayWrap(<Container {...fixtures} />)
  );

  container.find('button').simulate('click')

  expect(container.props().relay.setVariables).toBeCalled();
  expect(container.props().relay.setVariables.mock.calls[0][0]).toEqual(
    { "numToShow": 20 }
  )
})
