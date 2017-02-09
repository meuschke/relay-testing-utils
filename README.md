# relay-testing-utils
Easy to use relay mock and unit testing tool (works with Jest &amp; Enzyme)



## Install

`npm install relay-testing-utils`


## Getting started

In order to unit test your relay containers you need a tool that provides you mocking & testing functionality.
I recommend to use Jest but you can use any kind of testing library.

#### Mocking Relay with Jest

With Jest you can define manual mocks in a `__mocks__` directory.
Please create `__mocks__/react-relay.js` in your project repository and add the following code.

```javascript
import relayTestingUtils from 'relay-testing-utils'
const relay = jest.genMockFromModule('react-relay');


export default relayTestingUtils.relayMock(relay)

```

#### Test a Relay Container


#### Simple Query

If your container has a fragment like:

```
fragments: {
  benutzer: () => Relay.QL
    fragment on BenutzerType {
      id
      prename
      surname
  }
```

You can test it with the following code:

```javascript
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
    relayTestingUtils.relayWrap(<Example {...fixtures} />)
  );
});

```

### Testing Mutation

You are able to spy a mutation and test the passed props that are expected.

``` javascript
test('Test mutation', () => {
  // use a spy / mock fn
  const spy = jest.fn();
  Relay.Store.mockCommitUpdate(spy)

  const container = mount(
      relayTestingUtils.relayWrap(<Mutation {...fixtures} />)
  );
  // test if the mutation was commited with the expected variables
  expect(spy.mock.calls[0][0].getVariables().text).toBe('abc')
})
```

### Examples

You will find more detail and working examples in the `example` folder.
Run the command `npm test` to execute them.


### API

`.relayMock(relay)` => returns a Relay mock implementation

`.relayWrap(<YourContainer />, [{OPTIONS}])` => wraps your container with relay mock environment and passes `this.props.relay`


## Roadmap

- auto generating fixture data based on schema
