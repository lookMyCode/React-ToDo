import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      'taskInputValue': '',
      'tasks' : [

      ],
    };
  }

  changeInputValue(e) {
    this.setState({
      'taskInputValue': e.target.value
    });
  }

  changeCheck(index) {
    this.state.tasks[index]['checked'] = !this.state.tasks[index]['checked'];
    this.setState({
      'tasks': this.state.tasks
    });
  }

  addTask() {
    this.state.tasks.push({
      'text': this.state.taskInputValue,
      'checked': false
    });
    this.setState({
      'taskInputValue': '',
      'tasks': this.state.tasks
    }); 
  }

  removeTask(index) {
    this.state.tasks.splice(index, 1);
    this.setState({
      'tasks': this.state.tasks
    });
  }

  render() {
    const tasks = this.state.tasks.map( (item, index) => {
      return (
        <Task text={item.text} checked={item.checked} changeCheck={this.changeCheck.bind(this, index)} removeTask={this.removeTask.bind(this, index)} cln={item.checked ? 'line_through' : null} key={index} />
      );
    } );
    return (
      <div className="todo">
        <h1>My first React Aplication - To Do</h1>

        <AddTask value={this.state.taskInputValue} changeValue={this.changeInputValue.bind(this)} addTask={this.addTask.bind(this)} />

        <ul className="tasks">
          {tasks}
        </ul>
      </div>
    );
  }
}

function AddTask(props) {
  return (
    <div className="add_task">
      <input type="text" className="add_task_input" value={props.value} onChange={props.changeValue}/>
      <button className="add_task_btn" onClick={props.addTask}>Add Task</button>
    </div>
  );
}

function Task(props) {
  return (
    <li>
      <label>
        <input type="checkbox" checked={props.checked} onChange={props.changeCheck} />
        <div className="checkbox"></div>
      </label>
      <span className={props.cln}>{props.text}</span>
      <div className="remove_task" onClick={props.removeTask}>
        <span>remove</span>
      </div>
    </li>
  );
}

export default App;
