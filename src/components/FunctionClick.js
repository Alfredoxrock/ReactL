import React from 'react'

function FunctionClick(){
	function clickHandler() {
		console.log('Button click boy');
	}
	return (
		<div>
			<button onClick={clickHandler}>Click Man</button>
		</div>
	)
}

export default FunctionClick