import React, { Component } from 'react';
import Die from './Die';
import './../styles/components/Dice.css';

class Dice extends Component 
{
	render() 
	{
		return <div className="Dice">
			{
				this.props.dice.map((d, idx) =>
					<Die toggleLocked={this.props.toggleLocked}
						val={d}
						locked={this.props.locked[idx]}
						idx={idx}
						key={idx} 
						disabled={ this.props.disabled }
						rolling={ this.props.rolling }
					/>
			)}
		</div>
	}
}

export default Dice;