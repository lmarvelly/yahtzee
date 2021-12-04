import React, { Component } from 'react';
import '../styles/components/RuleRow.css';

class RuleRow extends Component 
{
	render() 
	{
		// Below looks for a property like 
		// 	score = this.props.score 
		// and sets it to the name
		const { score, name, doScore, description } = this.props;
		const disabled = score !== undefined;

		return (
			<tr 
				className=
				{
					`RuleRow RuleRow-${
						disabled ? 'disabled' : 'active' }`
				} 
				onClick={ disabled ? null : doScore }
			>
				<td className="RuleRow-name">{ name }</td>
				<td className="RuleRow-score">{ disabled ? score : description }</td>
			</tr>
		)
	}
	}

export default RuleRow;