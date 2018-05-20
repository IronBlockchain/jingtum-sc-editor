import {actionTypes} from '../actions'

const init = {
  code: 'start coding here:'
}

export default (state = init, action) => {
  switch(action.type){
    case actionTypes.Editor_Change:
      return {...state, code: action.code}
    default:
      return state
  }
}