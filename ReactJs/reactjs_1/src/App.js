import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layouts/Header';
import AddItem from './components/AddItem';
import { v4 as uuid } from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/pages/About';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: "go for walk",
        isCompleted: false
      },
      {
        id: uuid(),
        title: "have breakfast with someone<3",
        isCompleted: false
      },
      {
        id: uuid(),
        title: "have a good sleep",
        isCompleted: true
      }

    ]
  }
  markCompleted = (id) => {

    this.setState({
      todos: this.state.todos.map(todo => {
        if (id === todo.id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;

      })
    });
  }
  removedItem = (id) => {

    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });

  }
  AddItem = (title) => {
    let newTodo = {
      id: uuid(),
      title: title,
      isCompleted: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
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
