import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  counter = 9;
  state = {
    tasks: [
      {
        id: 0,
        text: "ssome string",
        date: "2019-12-30",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: "shopping",
        date: "2019-10-30",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: "buy beer",
        date: "2019-09-27",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 3,
        text: "buy more beer",
        date: "2019-09-27",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 4,
        text: "visit Tom",
        date: "2019-09-27",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 5,
        text: "find gypsy tresure",
        date: "2019-09-27",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 6,
        text: "take some gypsy tears",
        date: "2019-09-27",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 7,
        text: "replace front left bulb",
        date: "2019-09-27",
        important: true,
        active: true,
        finishDate: null
      }
    ]
  };

  deleteTask = id => {
    console.log("delete element " + id);
    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex(task => task.id === id);
    // tasks.splice(index, 1);
    // this.setState({
    //   tasks
    // });
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id);
    this.setState({
      tasks
    });
  };

  changeTaskStatus = id => {
    console.log("change of element " + id);
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks
    });
  };

  addTask = (text, date, important) => {
    // console.log("object added in App");
    const task = {
      id: this.counter,
      text, //text from input
      date, //text from input
      important, //value from input
      active: true,
      finishDate: null
    };
    this.counter++;
    // console.log(task, this.counter);
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }));
    return true;
  };

  render() {
    return (
      <div className="App">
        <h1>TO DO APP</h1>
        <AddTask add={this.addTask} />
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
