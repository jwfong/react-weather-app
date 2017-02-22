import React from 'react';
import jsdom from 'jsdom';
import assert from 'assert';
import TestUtils from "react-addons-test-utils";

import App from '../src/components/App';
import Forecast from '../src/components/Forecast';
import MainReport from '../src/components/MainReport';
import SearchArea from '../src/components/searchArea';

describe('Check each components', () => {

  it('App componet should be an function', function() {
    assert.equal(typeof(App), 'function');
  });
  it('Forecase componet should be an function', function() {
    assert.equal(typeof(Forecast), 'function');
  });
  it('App componet should be an function', function() {
    assert.equal(typeof(MainReport), 'function');
  });
  it('App componet should be an function', function() {
    assert.equal(typeof(SearchArea), 'function');
  });

});

describe('MainReport component', () => {
  let subject;

  function renderShallow(component){
   const renderer = TestUtils.createRenderer();
   renderer.render(component);
   return renderer.getRenderOutput();
  }

    beforeEach(() => {
     let state = {
        data: [{
          day: 1,
          date: 1,
          text: 1
        },
        {
          day: 2,
          date: 2,
          text: 2
        },
        {day: 3,
          date: 3,
          text: 3
        }],
        index: 0
      };
      subject = renderShallow(<MainReport {...state} />);
    })

    it('should have a className of large-forecast', () => {
      assert.equal(subject.props.className, 'large-forecast');
    })
    it('should be a div', () => {
      assert.equal(subject.type, 'div')
    })

})

// describe('Check SearchArea component', function() {
//   let subject;

//   function renderShallow(component){
//    const renderer = TestUtils.createRenderer();
//    renderer.render(component);
//    return renderer.getRenderOutput();
//   }
  
//   beforeEach(() => {
//    let state = {
//       city: 'what',
//       state: 'DF'
//     };
//     subject = renderShallow(<SearchArea {...state} />);
//   })

//   it('renders two input feilds and a button', function() {
//     console.log(subject)
//     assert.equal(1, 1);
//   })

// })

