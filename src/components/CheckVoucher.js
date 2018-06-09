import React, { Component } from 'react';
import { Header } from '../header/Header'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom'

class CheckVoucher extends Component {
  componentWillMount(){
    this.props.getCheckVoucher(this.props.token);
  }

  render() {
    const cvItems = this.props.cv.map(cv => (
        <tr>
              <td>{cv.cvno}</td>
              <td>{cv.particulars}</td>
              <td>{cv.supplier}</td>
              <td>{cv.date}</td>
              <td>{cv.amount}</td>
              <td>{cv.owner}</td>
        </tr>
    ));
    return (
      <div>
        {Header()}
        <h1>Entry </h1>
        <Link to='/addcheck'>
          <button> Add Check Voucher </button>
        </Link>
        <Table responsive>
          <thead>
            <tr>
              <th>CV no.</th>
              <th>Particulars</th>
              <th>Supplier</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Submitted by</th>
            </tr>
            {cvItems}
          </thead>
          <tbody>
            
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cv: state.CheckVoucher,
  token: state.Token,
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckVoucher);
