import React, { Component } from 'react';
import propTypes from 'prop-types'



class TodoItem extends Component {
    getStyleMethod = () => {
        return { 
            backgroundColor:'#f5f5f5',
            padding:'10px',
            borderBottom:"1px #ccc dotted",
            textDecoration: this.props.todo.isCompleted ? 'line-through':'none'
    };
    }

    //work with bind only
    // markCompleted1(e){
    //     console.log(e.target);
    // }

    render() {
        const {id,title}=this.props.todo;
        return (
            <div style={this.getStyleMethod()}>
                <p>
                { /* <input type="checkbox" onChange={this.markCompleted1.bind(this)}></input>  {' '}  */ }

                <input type="checkbox" onChange={this.props.markCompleted.bind(this,id)}></input>  {' '}  
                
                 {title}
                {'   '}
                 <button style={btnStyle} onClick={this.props.removedItem.bind(this,id)}>X</button>

                </p>
         
            </div>

        );


    }
}

//for style
// let itemStyle = {
//     backgroundColor: '#f5f5f5'
// }

let btnStyle={
    float:'right',
    backgroundColor:"red",
    padding:'5px 10px',
    borderRadius: '50%',
    border:'none',
    cursor:'pointer'


}
//propTypes
TodoItem.propTypes = {
    todo: propTypes.object.isRequired
}

export default TodoItem;
