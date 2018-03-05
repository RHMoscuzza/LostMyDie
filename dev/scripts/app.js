// Import React from node_modules
import React from "react";
import ReactDOM from "react-Dom";

// Input how many dice you are rolling
const Times = (amount) => {
	return (
		<input className='times' type='number' min='1' max='10' placeholder='1' onChange={amount.update}></input>
	)
};
// Select your die
const Dice = (amount) => {
	return (
		<button value={amount.value} className='dNumber' onClick={amount.update}>
		</button>
	)
};
// The final result of the base math
const Final = (amount) => {
	return (
		<h2 className='final'>{amount.final}</h2>
	)
};
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			times: 1,
			final: 0,
			dNumber: [4, 6, 8, 10, 12,	20]
		};
		this.changeTimes = this.changeTimes.bind(this);
		this.calculateFinal = this.calculateFinal.bind(this);
	}
	renderFinal() {
		return (
			<Final final={this.state.final}></Final>
		)
	}
	renderTimes() {
		return (
			<Times value={this.state.times} update={this.changeTimes}></Times>
		)
	}
	renderDNumber() {
		var toRender = [];
		var dNumber = this.state.dNumber;
		for(var i = 0; i < dNumber.length; i++) {
			toRender.push(
				<Dice value={dNumber[i]} update={this.findFinal}></Dice> 
			)
		}
		return toRender;
	}
	calculateFinal(event) {
		var times = this.state.times;
		var value = event.target.value;
		var final = 0;
		var random = () => {
			return Math.floor(Math.random() * value) + 1;
		}
		for (var i = 0; i < times; i++) {
			result = random();
		}
		this.setState({
			final: final,
		})
	}
	changeTimes(event) {
		this.setState({
			times: event.target.value
		})
	}
	render() {
		return (
			<div className='diceRollSection'>
				<div className='timesSection'>
					{this.renderTimes()}
				</div>
				<div className='diceSection'>
					{this.renderDice()}
				</div>
				<div className='finalSection'>
					<h1>Your Die Roll Is...</h1>
					{this.renderFinal}
				</div>
			</div>
		)
	}
}

ReactDOM.render(
	<App />, 
	document.getElementById('app')
)
