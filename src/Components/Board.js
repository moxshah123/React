import React, { Component } from 'react';
import Square from './Square';

class Board extends React.Component {
    state = {  } 
    renderSquare(i){
        return <Square value = {i} />;
    }
}
 
export default Board;