import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectCity } from '../actions';

class City extends Component {

  handleClick = () => {
    this.props.selectCity(this.props.city);
  }

  render() {
    let cityClass = "list-group-item";
    if (this.props.city === this.props.selectedCity) {
      cityClass += " activia";
    }
    return(
      <div className={cityClass} onClick={this.handleClick}>
        {this.props.city.name}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCity }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(City);
