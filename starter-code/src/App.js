import React from 'react';
import './App.css';
import users from "./users";

class App extends React.Component {


  state = {
    firstName: '',
    lastName: '',
    campus: '',
    role: '',
    linkedin: '',
  }

  handleSubmit = event => {
    event.preventDefault();
    
    
  }

  render() {

    
    return (
      <div>
      
      <div className="Form">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Search: </label>
          <input
            type="text"
            name="title"
            id="title"
            value={this.state.title} />

<label htmlFor="student">Student</label>
          <input
            type="checkbox"
            name="student"
            id="student"
            checked={this.state.student}
            onChange={this.handleChange}
          />

<label htmlFor="teacher">Teacher</label>
          <input
            type="checkbox"
            name="teacher"
            id="teacher"
            checked={this.state.teacher}
            onChange={this.handleChange}
          />
              <button type="submit">Search</button>
        </form>
      </div>

      <div className = "user-table">
      <h1>Ironbook contacts</h1>
      <table className='table'>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Campus</th>
                            <th>Role</th>
                            <th>Links</th>
                        </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index) => {
                        return (
                            <tr>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.campus}</td>
                                <td>{user.role}</td>
                                <td> <img className='linkedin' src="./src/linkedin.png" onClick = {user.linkedin}/></td>
                            </tr>
                        )
                    })}

                    </tbody>
                </table>
      </div>
      </div>
    );
  }
}

export default App;