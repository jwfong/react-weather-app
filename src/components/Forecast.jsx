import React from 'react';


const Forecast = ({data}) => {
  
  let styles = {
    height: 70,
    width: 80,
    top: 300,
    backgroundColor: 'yellow',
    display: 'inline-block',
    fontSize: '0.7em',
    listStyleType: 'none'
  }

  return (
    <div>
      { data ? data.map( (item, key) => 
        <div style={styles} key={key} >{ item.day }
          <ul style={{listStyleType: 'none', margin: '0px', padding:'0px'}}>
            <li>{ item.date }</li>
            <li>{ item.high }f.</li>
            <li>{ item.low }f.</li>
            <li>{ item.text }</li>
          </ul>
        </div>) : <h3 style={{position: "relative", margin:"auto", display:"table"}}>Please enter a city and a state</h3> 
      }
    </div>
  )
}

export default Forecast;