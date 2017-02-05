

let initialState = {
  currentCity: '',
  currentState: '',
  data: []
}



export default function weatherReducers(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_WEATHER_SUCCESS':
      return Object.assign({}, state, {
        data: action.data.data['query'].results.channel['item'].forecast,
        dataReceived: true
      })
    case 'STORE_LOCATION':
      return Object.assign({}, state, {
        currentCity: action.city.split('%20').join(' '),
        currentState: action.state.split('%20').join(' ')
      })
    default:
      return state
  }
}