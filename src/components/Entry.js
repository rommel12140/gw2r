import React, { Component } from 'react';
import { Header } from '../header/Header'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom'

class Entry extends Component {
  componentWillMount(){
    this.props.getEntry(this.props.token);
  }

  render() {
    const entryItems = this.props.entry.map(entry => (
        <tr>
              <td>{entry.id}</td>
              <td>{entry.code}</td>
              <td>{entry.project}</td>
              <td>{entry.materials}</td>
              <td>{entry.CR}</td>
              <td>{entry.DR}</td>
              <td>{entry.owner}</td>
        </tr>
    ));
    return (
      <div>
        {Header()}
        <h1>Entry </h1>
        <Link to='/addentry'>
          <button> Add Entry </button>
        </Link>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Code</th>
              <th>Project</th>
              <th>Materials</th>
              <th>CR</th>
              <th>DR</th>
              <th>Submitted by</th>
            </tr>
            {entryItems}
          </thead>
          <tbody>
            
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  entry: state.Entry,
  token: state.Token,
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Entry);
