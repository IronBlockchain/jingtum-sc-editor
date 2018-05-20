import React, {Component} from 'react';
import AceEditor from 'react-ace'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {onEditorChange} from "../actions/index";

import 'brace/mode/lua';
import 'brace/theme/github';

class Editor extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('this,', this)
  }


  render() {
    const that = this;

    return (
      <AceEditor
        mode="lua"
        theme="github"
        value={that.props.code}
        onChange={(code)=> this.props.dispatch(onEditorChange(code))}
        name="editor_id"
        width="1200px"
        editorProps={{$blockScrolling: true}}
      />
    )
  }
}

export default connect(
  store => ({code: store.editor.code})
)(Editor)