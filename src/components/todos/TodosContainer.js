import React, { Component } from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'

class TodosContainer extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map((item, id) => <Todo key={id} text={item} />)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodosContainer)
