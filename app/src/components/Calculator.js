import React, { Component } from 'react'
import calculatorImg from './calculator.png'

class Calculator extends Component {

	constructor() {
		super();

		this.state = {
			header: "Sucky Calculator",
			display: "0",
			operator: null,
			tempNum: 0,
			total: 0,
			ran: false
		}
		
	}
	

	updateHeader(e) {
		let value = e.target.value;
		
		this.setState({
			header: value
		})
	}

	onPressNum(num){
		// this.setState({
		// 	total: "0"
		// })
		
		if(this.state.ran = false) {
			
			
			if (this.state.display === "0") {
				this.setState({ 
					display: num
				})
		
			} else {
				this.setState({
					display: this.state.display + num

				})
			}
		} else { 
			this.setState({
				display: '',
				ran: false
			})
				if (this.state.display === "0") {
				this.setState({ 
					display: num
				})
		
			} else {
				this.setState({
					display: this.state.display + num

				})
			}}
		
		// } else {
		// 	this.setState({
				
		// 		display: this.state.display + num
		// 	})
		// }
		if (this.state.display.length >= 13){
				
			this.setState({
				display: this.state.display
			})
			} 
	}

	onPressOp(op){
		
		this.setState({
			tempNum: this.state.display,
			display: op,
			operator: op
		})
	}

	onPressClear() {
		 this.setState({
			display: "0",
			tempNum: "0",
			operator: null
		})
	}

	onPressEquals() {
		var total;

		if (this.state.operater = !null) {
			switch(this.state.operator) {
				case '+':
					total = parseInt(this.state.tempNum, 10) + parseInt(this.state.display, 10);
					break;
				case '-':
					total = parseInt(this.state.tempNum, 10) - parseInt(this.state.display, 10);
					break;
				case '*':
					total = parseInt(this.state.tempNum, 10) * parseInt(this.state.display, 10);
					break;
				case '/':
					total = parseInt(this.state.tempNum, 10) / parseInt(this.state.display, 10);
					break;
				default:
					break;
			}
		} else {
			this.setState({ 
			display: "0",
			tempNum: "0"
		}) 
		}
		this.setState({
			display: total,
			ran: true
		})
		
	}

	render() {
		return (
			<div id="calculator-container">
				<input id="header-input" onChange={(e)=> this.updateHeader(e) }/>
				<h1 id="header"> {this.state.header} </h1>
				<img className="remove-highlight" src={calculatorImg} alt="calculator" />
				<div id="calculator-mask" className="remove-highlight">
					<div className="output">
						<span className="total">
							{ this.state.display}	
						</span>
					</div>

					<div className="btn clear" onClick= { (e)=> this.onPressClear() }></div>

					<div className="btn zero" onClick= { (e)=> this.onPressNum('0') }></div>
					<div className="btn one" onClick= { (e)=> this.onPressNum('1') }></div>
					<div className="btn two" onClick= { (e)=> this.onPressNum('2') }></div>
					<div className="btn three" onClick= { (e)=> this.onPressNum('3') }></div>
					<div className="btn four" onClick= { (e)=> this.onPressNum('4') }></div>
					<div className="btn five" onClick= { (e)=> this.onPressNum('5') }></div>
					<div className="btn six" onClick= { (e)=> this.onPressNum('6') }></div>
					<div className="btn seven" onClick= { (e)=> this.onPressNum('7') }></div>
					<div className="btn eight" onClick= { (e)=> this.onPressNum('8') }></div>
					<div className="btn nine" onClick= { (e)=> this.onPressNum('9') }></div>

					<div className="btn equal" onClick= { (e)=> this.onPressEquals() }></div>
					<div className="btn multiply" onClick= { (e)=> this.onPressOp('*') }></div>
					<div className="btn divide" onClick= { (e)=> this.onPressOp('/') }></div>
					<div className="btn subtract" onClick= { (e)=> this.onPressOp('-') }></div>
					<div className="btn add" onClick= { (e)=> this.onPressOp('+') }></div> 
				</div>
			</div>
		)
	}
}

export default Calculator


