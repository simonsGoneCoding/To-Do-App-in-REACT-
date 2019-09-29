import React, { Component } from "react";
import "./AddTask.css";
class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: "",
    checked: false,
    date: this.minDate
  };

  handleDate = event => {
    this.setState({
      date: event.target.value
    });
  };

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1; //cut only the year (string) muliply by one gives silent conversion to number add one to get next year (number).
    maxDate = maxDate + "-12-31"; //silent conversion back to string

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
          min={this.minDate}
          max={maxDate}
          onChange={this.handleDate}
        />{" "}
        <br />
        <button>Add task</button>
        <hr />
      </div>
    );
  }
}

export default AddTask;
