// Trying to fix Git Issue -- Remove this comment when fixed

// Import React from node_modules
import React from "react";
import ReactDOM from "react-Dom";

// Input how many dice you are rolling
const Times = (amount) => {
	return (
		<input className='times' type='number' min='1' max='10' placeholder='0' onChange={amount.update}/>
	)
}
// Select your die type
const Dice = (amount) => {
	return (
		<button value={amount.value} className='dNumber' onClick={amount.update}>
			{amount.value} Sided
		</button>
	)
}
// The final result of the base math
const Final = (amount) => {
	return (
		<h2 className='finalBox'>{amount.final}</h2>
	)
}
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			times: 1,
			final: 0,
			dNumber: [4, 6, 8, 10, 12, 20]
		};
		this.changeTimes = this.changeTimes.bind(this);
		this.calculateFinal = this.calculateFinal.bind(this);
	}
	renderFinal() {
		return (
			<Final final={this.state.final}/>
		)
	}
	renderTimes() {
		return (
			<Times value={this.state.times} update={this.changeTimes}/>
		)
	}
	renderDNumber() {
		var toRender = [];
		var dNumber = this.state.dNumber;
		for(var i = 0; i < dNumber.length; i++) {
			toRender.push(
				<Dice value={dNumber[i]} update={this.calculateFinal} key={dNumber[i]}/> 
			)
		}
		return toRender;
	}
	calculateFinal(e) {
		var times = this.state.times;
		var value = e.target.value;
		var final = 0;
		var random = () => {
			return Math.floor(Math.random() * value) + 1;
		}
		for (var i = 0; i < times; i++) {
			final += random();
		}
		this.setState({
			final: final,
		})
	}
	changeTimes(e) {
		this.setState({
			times: e.target.value
		})
	}
	render() {
		return (
			<div className='diceRollSection'>
				<div className='timesSection'>
					<h2>How Many Dice Do You Want To Roll?</h2>
					{this.renderTimes()}
				</div>
				<div className='diceSection'>
					<h2>Which Die Did You Lose?</h2>
					{this.renderDNumber()}
				</div>
				<div className='finalSection'>
					<h2>Your Total Is...</h2>
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
