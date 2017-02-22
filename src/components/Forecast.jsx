import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeIndex } from '../actions/index';


class Forecast extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.changeIndex(event);
  }
  

  render() {

    let { data } = this.props.state;

    return (
      <div className="center" >
        { data ? data.map( (item, index) => { 
          let boundClickItem = this.handleClick.bind(this, index);
          return (
          <div className="forecastItem" key={index} onClick={boundClickItem}>{ item.day } &nbsp;
            <ul className="forecast-list">
              <li className="listItem">{ item.date }</li>
            </ul>
          </div>)}) : <h3 className="center">Please enter a city and a state</h3> }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({changeIndex}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Forecast);

