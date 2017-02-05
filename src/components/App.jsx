import React from 'react';
import SearchArea from './SearchArea';
import Forecast from './Forecast';
import { connect } from 'react-redux';



class App extends React.Component {

  componentWillMount() {
    
  }

  componentWillUpdate(nextProps, nextState) {

  }

  render() {
    let styles = {
      height: '100%',
      width: '800px',
      backgroundColor: '#f2f2f2',
      overflowX: 'hidden',
      position: 'relative',
      margin: 'auto'
    }

    let {currentCity, currentState, dataReceived, data} = this.props.state;

    return (
      <div style={styles}>
        <div>
          {
            this.props.state.dataReceived === true ?
            <h1 style={{'position':'relative', 'textAlign': 'center'}}> Weather Forecast for {currentCity}, {currentState}</h1>
            : <h1 style={{'position':'relative', 'textAlign': 'center'}}>Check the Weather</h1>
          }
            <Forecast data={dataReceived ? data : ''}/>
            <SearchArea style={{position: "relative", margin:"auto", display:"table"}} click={this.props.getData}/>
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
  return {
    getData: (data) => {
      dispatch()
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

