import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "ssome string",
        date: "2019-12-30",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: "shopping",
        date: "2019-10-30",
        important: true,
        active: true,
        finishDate: null
      }
    ]
  };

  deleteTask = id => {
    console.log("delete element " + id);
  };

  changeTaskStatus = id => {
    console.log("change of element " + id);
  };

  render() {
    return (
      <div className="App">
        <p>ulala</p>
        <AddTask />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
