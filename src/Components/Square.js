import React, { Component } from 'react';

class Square extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <button className='square'>{this.props.value}</button>
            </div>
        );
    }
}
 
export default Square;