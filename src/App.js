import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ようこそReactワールドへ(=ﾟωﾟ)ﾉ</h1>
        </header>
      </div>
      <TextField
        hintText = "あなたのあ名前"
      /><br />
      <TextField
        hintText = "お問い合わせ内容"
      /><br />
      </MuiThemeProvider>
    );
  }
}

export default App;
