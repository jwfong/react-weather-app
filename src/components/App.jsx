import React from 'react';
import SearchArea from './SearchArea';
import Forecast from './Forecast';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MainReport from './MainReport';
import { fetchWeather } from '../actions/index';
import '../styles.css';




class App extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentWillMount() {
    let storedCity = window.localStorage.getItem('city');
    let storedState = window.localStorage.getItem('state');
    
    if(storedCity && storedState) {
      this.props.fetchWeather(storedCity, storedState);
    }
  }

  

  render() {

    let {currentCity, currentState, dataReceived, data, index} = this.props.state;

    let capitalize = function(str) {
      if(!str) {
        return;
      }
      let newArr = str.split(' ');
      let newName = []
      
      if(newArr.length <= 1){
        let capStr = newArr[0].split('');
        capStr[0] = capStr[0].toUpperCase();
        return capStr.join('');
      } else if (newArr.length > 1) {
          
      let name = newArr.map( word => {
          word = word.split('');
          word[0] = word[0].toUpperCase();
          newName.push(word.join(''));
        });
      }
      return newName.join(' ');
    }

    return (
      <div className="root">
        <div>
          {
            dataReceived === true ?
            <h1 className="center weather-title"> Weather Forecast for {capitalize(currentCity)}, {capitalize(currentState)}</h1>
            : <h1 className="center title">Check the Weather</h1>
          }
          { dataReceived === true ? <MainReport data={data} index={index} /> : ''}
          <Forecast data={dataReceived ? data : ''}/>
          <SearchArea className="center" click={this.props.getData}/>
        </div>
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
  return bindActionCreators({fetchWeather}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

