

let initialState = {
  currentCity: '',
  currentState: '',
  data: [],
  index: 0
}



export default function weatherReducers(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_WEATHER_SUCCESS':
      return Object.assign({}, state, {
        data: action.data.data['query'].results.channel['item'].forecast,
        dataReceived: true
      })
    case 'STORE_LOCATION':
      //store most previous entered location into browsers localStoreage
      window.localStorage.setItem('city', action.city.split('%20').join(' '))
      window.localStorage.setItem('state', action.state.split('%20').join(' '))
      
      return Object.assign({}, state, {
        currentCity: action.city.split('%20').join(' '),
        currentState: action.state.split('%20').join(' ')
      })
    case 'CHANGE_INDEX':
      return Object.assign({}, state, {
        index: action.val
      })
    default:
      return state
  }
}