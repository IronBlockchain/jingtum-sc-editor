import React, {Component} from 'react';
import AceEditor from 'react-ace';

import 'brace/mode/lua';
import 'brace/theme/github';

export default class Editor extends Component {

  constructor(props) {
    super(props);
    this.state = {code: ''}
  }

  componentDidMount() {
    console.log('this,', this)
  }


  render() {
    const that = this;

    const onChange = (code) => {
      this.setState({code})
      console.log(this.state.code)
    }

    return (
      <AceEditor
        mode="lua"
        theme="github"
        value={that.state.code}
        onChange={onChange}
        name="editor_id"
        width="1200px"
        editorProps={{$blockScrolling: true}}
      />
    )
  }

}