import React, { Component } from 'react';

//Class component

class Welcome extends Component {
    render(){
        return <h1>Welcome {this.props.className} a.k.a. {this.props.heroName}</h1>
    }
}

export default Welcome;