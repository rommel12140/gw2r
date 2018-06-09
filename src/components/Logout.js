import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import { Link } from 'react-router-dom'

class Logout extends Component {
  componentWillMount(){
    this.props.resetState()
  }

  onChange(e){
    this.setState(
    {
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
            <Link to='/'>
                <button type="submit">Logout</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Logout);