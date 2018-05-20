import {actionTypes} from '../actions'
import codeSample from '../constants/sampleCode/dataStorage';

const init = {
  code: codeSample
}

export default (state = init, action) => {
  switch(action.type){
    case actionTypes.Editor_Change:
      return {...state, code: action.code}
    default:
      return state
  }
}