import React, { Component } from 'react';
import TodoItem from './TodoItem';
import propTypes from 'prop-types'


class  Todos extends Component{
    render(){
         return this.props.todos.map((todo)=>  
            (<TodoItem key={todo.id} todo={todo} markCompleted={this.props.markCompleted} removedItem={this.props.removedItem}/>
         
            )
            );

    
    }
}

//propTypes
Todos.proptype={
    todos: propTypes.array.isRequired,
    markCompleted:propTypes.func.isRequired,
    removedItem:propTypes.func.isRequired
};
export default Todos;
