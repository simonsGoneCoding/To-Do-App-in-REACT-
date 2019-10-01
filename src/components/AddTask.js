import React, { Component } from "react";
import "./AddTask.css";
class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: "",
    checked: false,
    date: this.minDate
  };

  handleText = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleCheckbox = e => {
    this.setState({
      checked: e.target.checked
    });
  };

  handleDate = event => {
    this.setState({
      date: event.target.value
    });
  };

  handleClick = () => {
    const { date, text, checked } = this.state;
    // console.log("click in AddTask");
    if (text.length > 2) {
      const add = this.props.add(text, date, checked);
      if (add) {
        this.setState({
          text: "",
          checked: false,
          date: this.minDate
        });
      }
    } else {
      alert("string must contain at least 3 letters");
    }
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
          onChange={this.handleText}
        />
        <input
          type="checkbox"
          checked={this.state.checked}
          id="important"
          onChange={this.handleCheckbox}
        />
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
        />
        <br />
        <button onClick={this.handleClick}>Add task</button>
        <hr />
      </div>
    );
  }
}

export default AddTask;
