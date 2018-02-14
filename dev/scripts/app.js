import React from "react";
import ReactDOM from "react-Dom";

var dNumber = [4, 6, 8, 10, 12,	20];

const Dice = (amount) => {
	return (
		<button value={amount.value} className='dice' onClick={amount.update}>
		</button>
	)
};
const Times = (amount) => {
	return (
		<input className='times' type='number' min='1' max='10' placeholder='1' onChange={amount.update}></input>
	)
};
const Final = (amount) => {
	return (
		<h2 className='final'>{amount.final}</h2>
	)
};

