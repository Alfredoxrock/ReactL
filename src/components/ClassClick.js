import React, {Component} from 'react'

export class ClassClick extends Component{

	clickHandler(){
		console.log('Clicked the button girl');
	}
	render(){

		return (

				<div>
					<button onClick={this.clickHandler}>Click Me girl</button>
				</div>
			)
	}
}

export default ClassClick