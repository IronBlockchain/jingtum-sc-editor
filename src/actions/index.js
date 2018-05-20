import _ from 'lodash';

export const actionTypes =  {
  Editor_Change: 'Editor_Change'
}

export const onEditorChange = (code) => ({type: actionTypes.Editor_Change, code})

