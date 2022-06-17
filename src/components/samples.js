import React from 'react';

//Functional component

/* function Title() {
    return <h1>Hi This is a web</h1>
} */

const Title = (props) => {
//console.log(props);
return (
<div>
    <h1>Hi {props.className} a.k.a. {props.heroName}</h1>
    {props.children}
</div>

)

}

function getVal() {
    const val = document.querySelector('input').value;
    console.log(val);
  }

export default Title;