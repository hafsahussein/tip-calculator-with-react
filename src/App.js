import React, { Component } from 'react';
import Title from "./components/Title";
import InformationForm from "./components/InformationForm"
import Result from  "./components/Result"

export default class App extends Component {
  state={
    bill:0,
    quality:0,
    people:0,
    reult:''
  }
  handleChange=input=>e=>{
    this.setState({
      [input]:e.target.value,
      result:''
    })
  }
  getResult=(bill, quality, people)=>{
    const result= Number(people)===1?
    '$'+ (bill*quality/people).toFixed(2):
    '$'+ (bill*quality/people).toFixed(2) + " each."
    ;
    this.setState({
      result,     
      bill:0,
      quality:0,
      people:0,
    })
    console.log(result)
  }
   render() {
     const{bill, quality, people, result}= this.state;
    return (
<div className="App">
      <Title/>
      <InformationForm 
      bill={bill}
      quality={quality}
      people={people}
      getResult={this.getResult}
      handleChange={this.handleChange}
      />
      {result&& <Result result ={result}/>}
    </div>
    )
  }
}

