import React,{Component} from 'react';

class ButtonPanel extends Component{
   
    butttonClicked(e){         
         this.props.getValues(e.target.value, e.target.className);        
    }

    render(){
        return(
            <div className="ButtonPanel container">
               <div className="row first-row">
                  <div className="col-6 "><button className="AC" value='AC' onClick={this.butttonClicked.bind(this)}>AC</button></div>
                  <div className="col-3">
                        <button className="Operator Delete" id="Delete" value='DEL' onClick={this.butttonClicked.bind(this)}> DEL                               
                        </button>
                  </div>
                  <div className="col-3">
                        <button className="Operator" id="operator/" value='/' onClick={this.butttonClicked.bind(this)}>/
                        </button>
                  </div>
               </div>
               <div className="row second-row">
                  <div className="col">
                        <button className="Number" id="Number-7" value='7' onClick={this.butttonClicked.bind(this)}>7
                        </button> 
                  </div>
                  <div className="col">
                        <button className="Number" id="Number-8" value='8' onClick={this.butttonClicked.bind(this)}>8
                        </button>
                  </div>
                  <div className="col">
                        <button className="Number" id="Number-9" value='9' onClick={this.butttonClicked.bind(this)}>9
                        </button>
                  </div>
                  <div className="col">
                        <button className="Operator" id="operator*" value="*" onClick={this.butttonClicked.bind(this)}>*
                        </button>
                  </div>
               </div>
               <div className="row third-row">
                  <div className="col">
                        <button className="Number" id="Number-4" value='4' onClick={this.butttonClicked.bind(this)}>4
                        </button> 
                  </div>
                  <div className="col">
                        <button className="Number" id="Number-5" value='5' onClick={this.butttonClicked.bind(this)}>5
                        </button>
                  </div>
                  <div className="col">
                        <button className="Number" id="Number-6" value='6' onClick={this.butttonClicked.bind(this)}>6
                        </button>
                  </div>
                  <div className="col">
                        <button className="Operator" id="operator-" value="-" onClick={this.butttonClicked.bind(this)}>-
                        </button>
                  </div>
               </div>
               <div className="row fourth-row">
                  <div className="col">
                        <button className="Number" id="Number-1" value='1' onClick={this.butttonClicked.bind(this)}>1
                        </button> 
                  </div>
                  <div className="col">
                        <button className="Number" id="Number-2" value='2' onClick={this.butttonClicked.bind(this)}>2
                        </button>
                  </div>
                  <div className="col">
                        <button className="Number" id="Number-3" value='3' onClick={this.butttonClicked.bind(this)}>3
                        </button>
                  </div>
                  <div className="col">
                        <button className="Operator" id="operator+" value="+" onClick={this.butttonClicked.bind(this)}>+
                        </button>
                  </div>
               </div>
               <div className="row fifth-row">
                  <div className="col-6">
                        <button className="Number" id= "Number-0" value="0" onClick={this.butttonClicked.bind(this)}>0
                        </button>
                  </div>
                  <div className="col-3">
                        <button className="Operator Decimal" id="operator." value="." onClick={this.butttonClicked.bind(this)}>.
                        </button>
                  </div>
                  <div className="col-3">
                        <button className="Operator Equal" id="operator=" value="=" onClick={this.butttonClicked.bind(this)}>=
                        </button>
                  </div>
               </div>
            </div>
        );
    }
}

export default ButtonPanel;