import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import { Header } from '../header/Header'
import PropTypes from 'prop-types';
import { createPost } from '../actions/recipes';

class AddCheckVoucher extends Component {
  constructor(props){
    super(props);
    this.state = {
      particulars: 'Materials',
      amount: '9000',
      owner: 'rommel',
      supplier: 'GW2R',
      cvno: '101982',
    };
  }

  onChange(e){
    this.setState(
    {
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e){
    e.preventDefault();

    const post = {
        particulars: this.state.particulars,
        amount: this.state.amount,
        owner: 'rommel',
        supplier: this.state.supplier,
        cvno: this.state.cvno,
        
    };

    this.props.addCheckVoucher(post);
  }

  render() {
    const a = this.props.addCheckVoucher(this.props.token,this.state)
    return (
      <div>
        {Header()}
        <h1>Add Check Voucher</h1>
        <form onSubmit={() => a}>
          <div>
            <label>Particulars: </label>
            <br />
            <input type="text" onChange={this.onChange.bind(this)} name="title" value={this.state.particulars}/>
          </div>
          <br />
          <div>
            <label>Supplier: </label>
            <br />
            <input name="text" onChange={this.onChange.bind(this)} value={this.state.supplier} />
          </div>
          <div>
            <label>CV no: </label>
            <br />
            <input type="text" onChange={this.onChange.bind(this)} name="title" value={this.state.cvno}/>
          </div>
          <br />
          <div>
            <label>Amount: </label>
            <br />
            <input name="text" onChange={this.onChange.bind(this)} value={this.state.amount} />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    token: state.Token
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCheckVoucher);