import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layouts/Header';
import AddItem from './components/AddItem';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/pages/About';
import axios from 'axios'


class App extends Component {
  state = {
    todos: []
  }
  markCompleted = (id) => {

    this.setState({
      todos: this.state.todos.map(todo => {
        if (id === todo.id) {
          todo.completed = !todo.completed;
        }
        return todo;

      })
    });
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(resp=>this.setState({todos:resp.data}))

  }

  removedItem = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(resp=>console.log(resp.data));
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });

  }
  AddItem = (title) => {

    axios.post('https://jsonplaceholder.typicode.com/todos',{
      title:title,
      completed:false
    })
    .then(resp=>this.setState({todos:[...this.state.todos,resp.data]}))

   // this.setState({ todos: [...this.state.todos, newTodo] })
  }
  render() {

    return (
      <Router>
        <div className="App">

          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddItem
                AddItem={this.AddItem} />

              <Todos
                todos={this.state.todos}
                markCompleted={this.markCompleted}
                removedItem={this.removedItem} />

            </React.Fragment>
          )}>
          </Route>

          <Route exact path="/about" component={About}>
          </Route>

        </div>
      </Router>


    );
  }

}


export default App;
