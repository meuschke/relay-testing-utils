# relay-testing-utils
Easy to use relay mock and unit testing tool (works with Jest &amp; Enzyme)



## Install

npm install relay-testing-utils


## Getting started

In order to unit test your relay containers you need a tool that provides you mocking & testing functionality.
I recommend to use Jest but you can use any kind of testing library.

#### Mocking Relay with Jest

With Jest you can define manual mocks in a `__mocks__` directory.
Please create `__mocks__/react-relay.js` in your project repository and add the following code.

```
import relayTestingUtils from 'relay-testing-utils'
const relay = jest.genMockFromModule('react-relay');


export default relayTestingUtils.relayMock(relay)

```

#### Test a Relay Container

```
import relayTestingUtils from 'relay-testing-utils'
import { mount } from 'enzyme';
import Example from '../Example';

// relay graph
const fixtures = {
  benutzer: {
    id: "007",
    prename: "James",
    surname: 'Bond'
  }
};

test('Relay testing wrap', () => {
  const wrapper = mount(
    relayTestingUtils.wrapRelay(<Example {...fixtures}>TEST</Example>)
  );
});


```


## Roadmap

- mutation testing
- auto generating fixture data based on schema
