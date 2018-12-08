import React,{Component} from 'react';

class TopDisplay extends Component{    
 
    render(){        
        return(
            <div className="TopDisplay  ">
                {this.props.topDisplayValue}
            </div>
        );
    }
}

export default TopDisplay;