import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';
import "@fortawesome/fontawesome-svg-core/styles.css"

import "./Die.css";

class Die extends Component 
{
	static defaultProps = 
	{
		diceIcons: 
		[
			faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix
		],
		val: 6 // Need this initial value at the beginning otherwise there's nothing to animate
	}

	constructor( props )
	{
		super( props );

		this.handleClick = this.handleClick.bind( this );
	}

	handleClick()
	{
		this.props.toggleLocked( this.props.idx );
	}

	render() 
	{
		const { locked, val, disabled, rolling } = this.props;

		const thisIcon = this.props.diceIcons[ val  - 1 ];
		let classes = 'Die';
		if( locked ) classes += ' Die-locked';
		if( rolling && !locked ) classes += ' spin';

		if( this.props.val !== undefined )
		{
			return (
				<FontAwesomeIcon 
					className={ classes } 
					disabled={ disabled }
					icon={ thisIcon } 
					size="3x"
					onClick={ this.handleClick }
				/>
		);}
		else
		{
			return <div></div>
		}
	}
}

export default Die;
