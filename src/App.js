import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  textbox: {
    backgroundColor: '#ECECEC',
    margin: 10
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ようこそReactワールドへ(=ﾟωﾟ)ﾉ</h1>
        </div>
        <TextField
          hintText = "あなたのお名前"
          style = {styles.textbox}
        /><br />
        <TextField
          hintText = "お問い合わせ内容"
          style = {styles.textbox}
          multiLine = {true}
          rows={3}
        /><br />
        <RaisedButton primary = {true} label = "送信！" onClick = {this.tick} />
        <p>{this.state.count}回送信したぜ(*｀艸´)ｳｼｼｼ</p>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
