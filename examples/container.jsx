import React from 'react';
import Relay from 'react-relay';

class Container extends React.Component {

  constructor(props){
    super(props)
  }
  getText(){
    //console.log(this.props)
    if(this.props.test){
      return this.props.test.text
    } else {
      return ''
    }
  }
  getList(){
    return this.props.list || []
  }
  showMore = () => {
    this.props.relay.setVariables({
      numToShow: this.props.relay.variables.numToShow + 10
    })
  }
  render(){
    return (
      <div>
        <h1>{this.getText()}</h1>
        <ul>
          {
            this.getList().map((entry, key) => {
              return (
                <li key={key}>{entry.name}</li>
              )
            })
          }
        </ul>
        <button onClick={this.showMore}>Show more</button>
      </div>
    )
  }
}


export default Relay.createContainer(Container, {
  initialVariables: {
    numToShow: 10,
  },
  fragments: {
    test: () => Relay.QL`
      fragment on Test {
        id,
        text,
      }
    `,
    list: () => Relay.QL`
      fragment on Params {
        list (
          numToShow: $numToShow
        ) {
          id,
          name
        }
      }
    `,
  },
});
