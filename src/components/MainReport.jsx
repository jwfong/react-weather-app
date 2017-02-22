import React from 'react';

const MainReport = ({data, index}) => {

  return (
    <div className="large-forecast"  >
      <div >
        <h1>{data[index].day} {data[index].date}</h1>
        <h3>{data[index].text}</h3>
      </div>
      <div className="temperature">
        <div className="add-margin">
          <h2>High</h2>
          <h3>{data[index].high}&#8457;</h3>
        </div>
         <div className="add-margin">
          <h2>Low</h2>
          <h3>{data[index].low}&#8457;</h3>
        </div>
      </div>
    </div>
  )
}

export default MainReport;