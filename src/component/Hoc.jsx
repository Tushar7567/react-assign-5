import {Component} from 'react';  
  
export default function Hoc(HocComponent){  
    return class extends Component{  
        render(){  
            return (  
                <div>  
                    <HocComponent></HocComponent> 
                    Higher-order components or HOC is the advanced method of reusing the component functionality logic. It simply takes the original component and returns the enhanced component.
                    (to understand go through the code😎)
                </div>  
  
            );  
        }  
    }   
}  





