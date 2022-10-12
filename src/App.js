import PureComp from "./component/PureComp";
import Hoc from "./component/Hoc";
import {Component} from 'react'

class App extends Component {
  state={
    count:0
  }

  
  render(){
  return (
    <div >
     <p>
     Pure Components in React are the components which do not re-renders when the value of state and props has been updated with the same values.
     Features of React Pure Components

    --Prevents re-rendering of Component if props or state is the same
    --Takes care of “shouldComponentUpdate” implicitly
    --State and Props are Shallow Compared(shallowCompare performs a shallow equality check on the current props and nextProps objects as well as the current state and nextState objects.)

     </p>
     <PureComp count={this.state.count} />
     <button onClick={()=>{this.setState({count:this.state.count+1});console.log('I am pure component')}}>Component with diff props/state</button>
      <button onClick={()=>{this.setState({count:this.state.count});console.log('I am normal component')}}>Component with same props/state</button>

      <h2>Higher order components</h2>
    </div>
  );
  }
}
App = Hoc(App)
export default App;

// count={count} setCount={setCount}