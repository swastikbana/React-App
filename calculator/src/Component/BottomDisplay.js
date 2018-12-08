import React,{Component} from 'react';

class BottomDisplay extends Component{
  
    render(){
             
            return(
                <div className="BottomDisplay">
                    {this.props.bottomDisplayValue}
                </div>
            );
    }
}

export default BottomDisplay;