import React, { Component } from "react";
import Dice from "./Dice";
import ScoreTable from "./ScoreTable";
import "./Game.css";

const NUM_DICE = 5;
const NUM_ROLLS = 3;

	class Game extends Component 
	{
	constructor(props) 
	{
		super(props);
		this.state = 
		{
			dice: Array.from({ length: NUM_DICE }),
			locked: Array(NUM_DICE).fill(false),
			rollsLeft: NUM_ROLLS,
			rolling: false,
			scores: 
			{
				ones: undefined,
				twos: undefined,
				threes: undefined,
				fours: undefined,
				fives: undefined,
				sixes: undefined,
				threeOfKind: undefined,
				fourOfKind: undefined,
				fullHouse: undefined,
				smallStraight: undefined,
				largeStraight: undefined,
				yahtzee: undefined,
				chance: undefined
			}
		};

		this.animateRoll = this.animateRoll.bind( this );
		this.roll = this.roll.bind( this );
		this.doScore = this.doScore.bind( this );
		this.toggleLocked = this.toggleLocked.bind( this );
	}

	animateRoll()
	{
		this.setState({ rolling: true }, () => {
			setTimeout( this.roll, 1000 );
		});
	}

	roll( evt ) 
	{
		this.setState( state => (
		{
			dice: state.dice.map((die, index) =>
				state.locked[index] ? die : Math.ceil(Math.random() * 6)
			),
			locked: state.rollsLeft > 1 ? state.locked : Array(NUM_DICE).fill(true),
			rollsLeft: state.rollsLeft - 1,
			rolling: false
		}));
	}

	toggleLocked(idx) 
	{
		// toggle whether idx is in locked or not
		if ( this.state.rollsLeft > 0 )
		{
			this.setState(st => (
				{
					locked: 
					[
						...st.locked.slice(0, idx), // Get all the 
						!st.locked[idx],
						...st.locked.slice(idx + 1)
					]
				}));
		}
	}
	

	doScore(rulename, ruleFn) 
	{
		if( !this.state.scores.rulename )
		{
			// evaluate this ruleFn with the dice and score this rulename
			this.setState(st => (
			{
				scores: 
				{					// e.g ["fourOfKind"]: fourOfKind.evalRoll
					...st.scores, [rulename]: ruleFn(this.state.dice) 
				},
				rollsLeft: NUM_ROLLS,
				locked: Array(NUM_DICE).fill(false)
			}));
			this.roll();
		}
	}

	render() 
	{
		return (
			<div className='Game'>
				<header className='Game-header'>
					<h1 className='App-title'>Yahtzee!</h1>

					<section className='Game-dice-section'>
						<Dice
							dice={ this.state.dice }
							locked={ this.state.locked }
							disabled={ this.state.rollsLeft === 0 }
							rolling={ this.state.rolling }
							toggleLocked={ this.toggleLocked }
						/>
						<div className='Game-button-wrapper'>
							<button
								className='Game-reroll'
								// disable every button thats true or if there are no dice rolls left
								disabled={ this.state.locked.every(x => x) || this.state.rollsLeft === 0 }
								onClick={ this.animateRoll }
							>
								{ this.state.rollsLeft } Rerolls Left
							</button>
						</div>
					</section>
				</header>
				<ScoreTable doScore={this.doScore} scores={this.state.scores} />
			</div>
		);
	}
}

export default Game;
