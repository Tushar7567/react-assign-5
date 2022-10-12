
import React, { PureComponent } from 'react'

export default class PureComp extends PureComponent {
  //  constructor(props){
  //   super(props)
  //  }

  render() {
    return (
      <div>
        <h3>Hii, I am Pure Component</h3>
        <p>Counter value is {this.props.count} </p>
        

        
      </div>
    )
  }
}
