import React from 'react'
import InputPreview from '../components/InputPreview'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import { Header } from '../header/Header'

class App extends React.Component{
  _onChange = (value) => {
    this.props.getMessage(value)
  }

  
  render() {  
    return(
      <div>
        <div>
          {Header()}
          <p> Dashboard {this.props.token}</p>
          <InputPreview
            value={this.props.message} 
            onChange={this._onChange}
            />
          
        </div>
      </div>
      )
  }
}
const mapStateToProps = state => ({
  message: state.SetMessage,
  token: state.Token
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);