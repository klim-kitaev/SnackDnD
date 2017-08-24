import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';

export class Snack extends Component{

    render(){
        const {name}=this.props;

        const style={
            opacity:1
        };

        return(
            <div className='snack' style={style}>
                {name}
            </div>
        )
    }

}

Snack.PropTypes={
    name:PropTypes.string.isRequired
}