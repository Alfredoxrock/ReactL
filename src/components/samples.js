import React from 'react';

//Functional component

/* function Title() {
    return <h1>Hi This is a web</h1>
} */

//Regular props
/*const Title = (props) => {
//console.log(props);
return (
<div>
    <h1>Hi {props.className} a.k.a. {props.heroName}</h1>
    {props.children}
</div>

)

}*/


/*
//Destructuring props
const Title = ({name, heroName}) => {
//console.log(props);
return ( 
<div>
    <h1>Hiiiiiii jeje {name} a.k.a. {heroName}</h1>
</div>

)

}
*/

const Title = props => {
//console.log(props);
const {name, heroName} = props
return ( 
<div> 
    <h1>Hiiiiiii jeje {name} a.k.a. {heroName}</h1>
</div>

)

}


function getVal() {
    const val = document.querySelector('input').value;
    console.log(val);
  }

export default Title;