import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class ActiveCity extends Component {

  render() {

    let style = {
      backgroundImage: 'url(https://kitt.lewagon.com/placeholder/cities/paris',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh'
    };

    let name = 'Paris';
    let address = '16 villa Gaudelet, 75011 Paris';

    if (this.props.selectedCity) {
      style = {
        backgroundImage: `url(https://kitt.lewagon.com/placeholder/cities/${this.props.selectedCity.slug})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
      };
      name = this.props.selectedCity.name;
      address = this.props.selectedCity.address;
    };

    return(
      <div className="active-city">
        <h2>{name}</h2>
        <p>{address}</p>
        <div style={style}>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
