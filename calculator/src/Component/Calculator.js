import React, { Component } from "react";
import "../App.scss";
import TopDisplay from "./TopDisplay";
import BottomDisplay from "./BottomDisplay";
import ButtonPanel from "./ButtonPanel";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bottomDisplayValue: 0,
      topDisplayValue: "",      
      opertorValue: "",
      tempValue:0,
      equalPressed:'N'
    };
  }

  evaluateEnteredValues(value, buttonClass) {
    console.log(buttonClass);
    switch (buttonClass) {
      case "AC":
        this.setState({
          bottomDisplayValue: 0,
          topDisplayValue: "",
          opertorValue: "",
          tempValue:0,
          equalPressed:'N'
        });
        break;
      case "Number":
      case "Operator Decimal":        
        
        console.log(this.state.bottomDisplayValue);
        if(this.state.equalPressed==='Y')
          break;
        
        //Dont allow multiple decimal point in a number
        if(this.state.bottomDisplayValue && this.state.bottomDisplayValue.toString().includes('.') && value=== ".")
        break;        
        
        if (this.state.opertorValue === "") {
          
          if (this.state.bottomDisplayValue === 0) {
            this.setState({ bottomDisplayValue: value });
          } else {
            this.setState({
              bottomDisplayValue: this.state.bottomDisplayValue + value
            });
          }
        } else {          
              if (this.state.tempValue !== 0) {
                this.setState({
                  bottomDisplayValue: this.state.tempValue+value,
                  topDisplayValue: this.state.topDisplayValue + value,
                  tempValue:this.state.tempValue+value
                  });
              } else {
                  this.setState({
                  bottomDisplayValue: value,
                  tempValue:value,
                  topDisplayValue: this.state.topDisplayValue + value
                });
          }
        }
        break;
      case "Operator":
                 
        if (this.state.topDisplayValue !== "") {
            if (isNaN(this.state.topDisplayValue[this.state.topDisplayValue.length-1])){ 
                this.setState({topDisplayValue:this.state.topDisplayValue.replace(/.$/,value),
                            opertorValue: value,
                            tempValue:0});
              }
              else
                this.setState({
                opertorValue: value,
                topDisplayValue: parseFloat(eval(this.state.topDisplayValue).toFixed(2)) + value,            
                bottomDisplayValue: parseFloat(eval(this.state.topDisplayValue).toFixed(2)) ,
                tempValue:0
              });
        } else
          this.setState({
            opertorValue: value,
            topDisplayValue: this.state.bottomDisplayValue + value,           
          });
        this.setState({equalPressed:'N'});
        break;

      case "Operator Equal":
        if(isNaN(this.state.topDisplayValue[this.state.topDisplayValue.length-1])){
            this.setState({bottomDisplayValue:
                    parseFloat(eval(this.state.topDisplayValue.substring(0,this.state.topDisplayValue.length-1)).toFixed(2))});
        }
        else
            this.setState({ bottomDisplayValue: 
                              parseFloat(eval(this.state.topDisplayValue).toFixed(2)),
                           equalPressed:'Y' });
      break;
      
      case "Operator Delete":
          
          if(this.state.topDisplayValue !==''){             
              if(isNaN(this.state.topDisplayValue[this.state.topDisplayValue.length-1]) &&
                 this.state.topDisplayValue[this.state.topDisplayValue.length-1]!=='.' ){
                     break;
              }
              else if(this.state.equalPressed==='Y'){
                break;
              }
              else
                 if(this.state.bottomDisplayValue.length<=1 || !this.state.bottomDisplayValue){
                   this.setState({
                      bottomDisplayValue: 0,                   
                      topDisplayValue:this.state.topDisplayValue.slice(0,-1),
                      tempValue:0
                    });
                  }
                 else
                    this.setState({topDisplayValue:this.state.topDisplayValue.slice(0,-1),
                            bottomDisplayValue:this.state.bottomDisplayValue.slice(0,-1),
                            tempValue:this.state.tempValue.slice(0,-1)});
          }
          else              
              this.setState({bottomDisplayValue:this.state.bottomDisplayValue.slice(0,-1)});
      break;

      default:
    }
  }

  render() {
    return (
      <div className="Calculator">
        <div className="DisplayPanel">
          <TopDisplay topDisplayValue={this.state.topDisplayValue} />
          <BottomDisplay bottomDisplayValue={this.state.bottomDisplayValue} />
        </div>
        <ButtonPanel getValues={this.evaluateEnteredValues.bind(this)} />
      </div>
    );
  }
}

export default Calculator;
