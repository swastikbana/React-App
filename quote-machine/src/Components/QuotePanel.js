import React, { Component } from "react";
import {getQuotes} from '../Actions/index.js';
import {connect} from 'react-redux';


var buttonClicked = 'N';
class QuotePanel extends Component {

   constructor(props){
       super(props)
       this.state={
           color:'#f0ffff',
           tweet:'',
           initialQuote:`Believe nothing, no matter where you read it, or who said it, no matter if I have said it, 
           unless it agrees with your own reason and your own common sense`,
           author: 'Buddha'
       }
   }
 
  onClickEvent() {    
    buttonClicked='Y';
    this.props.clickEvent(`url(https://picsum.photos/g/200/200/?image=${Math.floor(Math.random()*10)+1})`);
    this.props.getQuotes();
    this.setState({color:this.getRandomColor()});
    //console.log(this.state.color);
  }  

  getRandomColor() {
    var cssHSL = "hsl(" + 360 * Math.random() + ',' +
                 (25 + 70 * Math.random()) + '%,' + 
                 (85 + 10 * Math.random()) + '%)';
    // var new_light_color = 'rgb(' + (Math.floor((250-230)*Math.random()) + 200) + ',' + 
    //                                 (Math.floor((250-230)*Math.random()) + 200) + ',' + 
    //                                 (Math.floor((250-230)*Math.random()) + 200) + ')';
    return cssHSL;
}

sendTweet(){
  this.setState({tweet:'google.com'});
}
    render() {
    if(buttonClicked==='N')
    return (      
        
      <div className="quote-box" id="quote-box" style={{backgroundColor:this.state.color}}>      
        <div className="Quotes" id="text">              
          " {this.state.initialQuote} "
          <div className="Author" id="author">
            ~ {this.state.author}
          </div>           
        </div>        
        
        <a href={`https://twitter.com/intent/tweet/?text=${this.state.initialQuote}   ~ ${this.state.author}`}
             className="button" id="tweet-quote" target="_blank" 
             title="Tweet this quote!" >
          <i className="fab fa-twitter fa-3x"></i></a> 
        <button className="buttons" id="new-quote" onClick={this.onClickEvent.bind(this)}>
          New Quotes
        </button>
      </div>
    );
    else 
    return (      
        <div className="quote-box" id="quote-box" style={{backgroundColor:this.state.color}}>      
          <div className="Quotes">             
            " {this.props.fetchedQuote.quote} "
            <div className="Author">
            ~ {this.props.fetchedQuote.author}
            </div>           
          </div>        
          <a href={`https://twitter.com/intent/tweet/?text=${this.props.fetchedQuote.quote}   ~ ${this.props.fetchedQuote.author}`}
             className="button" id="tweet-quote" target="_blank" 
             title="Tweet this quote!">
          <i className="fab fa-twitter fa-3x"></i></a>  
          <button className="buttons" id="new-quote" onClick={this.onClickEvent.bind(this)}>
            New Quotes
          </button>
        </div>
      );

  }
}

function mapStateToProps(state){
    return{fetchedQuote:state.fetchedQuote  }
  }
export default connect(mapStateToProps,{getQuotes})(QuotePanel);


