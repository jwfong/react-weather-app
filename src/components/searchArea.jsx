import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      state: ''
    }
  }

  onCityChange(city) {
    this.setState({city});
  }

  onStateChange(state) {
    this.setState({state});
  }

  onFormSubmit(event) {
    event.preventDefault();
    let formatCity = this.state.city.trim().split(' ').join('%20');
    let formatState = this.state.state.trim().split(' ').join('%20');
    this.props.fetchWeather(formatCity, formatState);
    this.setState({city: '', state: ''});//clear input field
  }

  render() {
    return (
      <form style={{position: "relative", margin:"auto", display:"table"}} className="form-inline" onSubmit={event => this.onFormSubmit(event)}>
        <div className="input-group">
          <input className="form-control" type="text" value={this.state.city}
                 onChange={ event => this.onCityChange(event.target.value) }
                 placeholder="city"
                 />
          <input className="form-control" type="text" value={this.state.state}
                 onChange={ event => this.onStateChange(event.target.value) }
                 placeholder="state"
                 />
          <span className="input-group-addon">
            <button type="submit" className="btn btn-secondary">search</button>
          </span>
        </div>

      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchArea);