// Import React from node_modules
import React from "react";
import ReactDOM from "react-Dom";

// Dice Number Array (d4, d6...)
var dNumber = [4, 6, 8, 10, 12,	20];

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
			final: 0
		};
		this.newTimes = this.newTimes.bind(this);
		this.findFinal = this.findFinal.bind(this);
	}
	renderFinal() {
		return (
			<Final final={this.state.final}></Final>
		)
	}

}
