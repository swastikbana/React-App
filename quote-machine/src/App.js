import React, { Component } from 'react';
import QuotePanel from './Components/QuotePanel';
import  './App.scss';

class App extends Component { 
  constructor(props){
    super(props)
    this.state={
        color:'#f0ffff',
        // backgound:`url(https://unsplash.it/1900/900?image=${Math.floor(Math.random()*6)+1})`
        backgound:`url(https://picsum.photos/g/200/200/?random)`
    }
}

setBackGround=color=>{
    this.setState({backgound:color})     
}

  render() {
    return (
      <div className="App" style={{backgroundImage:this.state.backgound}} >                         
            <QuotePanel clickEvent={this.setBackGround}/>            
      </div>
    );
  }
}

export default App;
