import React, { Component } from "react";
import "./AddTask.css";
class AddTask extends Component {
  state = {
    text: "",
    checked: false,
    date: "2019-09-29"
  };
  render() {
    return (
      <div className="form">
        <input
          type="text"
          placeholder="Add task here"
          value={this.state.text}
        />
        <input type="checkbox" checked={this.state.checked} id="important" />
        <label htmlFor="important">Priority</label>
        <br />
        <label htmlFor="deadline">Deadline </label>
        <input
          type="date"
          id="deadline"
          value={this.state.date}
          min="2019-09-29"
          max="2019-12-30"
        />{" "}
        <br />
        <button>Add task</button>
        <hr />
      </div>
    );
  }
}

export default AddTask;
