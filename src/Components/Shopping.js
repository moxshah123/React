import React, { Component } from 'react';

class ShoppingList extends Component {
    state = {  } 
    render() { 
        return (
            <div className='shopping-list'>
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                <li>Instagrama</li>
                <li>Whatsapp</li>
                <li>Pinterest</li>
                </ul>
            </div>
        );
    }
}
 
export default ShoppingList;