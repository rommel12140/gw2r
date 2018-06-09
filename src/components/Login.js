import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'

class Login extends Component {
  constructor(props){
      super(props)
      this.state = {
        //TODO: CHANGE THIS BACK
        username: '',
        password: '',
      }
  }

  onChange(e){
    this.setState(
    {
      [e.target.name]: e.target.value
    });
  }

  render() {
    const a = this.props.getAuth(this.state)
    return (
      <div>

            <div>
                <label>User: </label>
                <br />
                <input type="text" onChange={this.onChange.bind(this)} name="username" value={this.state.username}/>
            </div>
            <br />
            <div>
                <label>Password: </label>
                <br />
                <input type='password' name="password" onChange={this.onChange.bind(this)} value={this.state.password} />
            </div>
            <br />
            <Button onSubmit={() => a} type="submit">Submit</Button>
            <Link to='/'>
                <button type="submit">Login</button>
            </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
