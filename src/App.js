import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Toolbar from './components/Toolbar';
import MainFeed1 from './components/MainFeed1';
import Users from './components/Users';
import Channels from './components/Channels';
import pa from './img/user1.png';
import ag from './img/user2.png';
import rm from './img/user3.png';


class App extends Component{
  state = {
    username: "Paddy",
    userpic: pa,
    time: '',
    chats: [
      {pic: rm, user: "Robert Marsh", text: "Here's some sample messages!", time: "4:00PM"},
      {pic: ag, user: "Andy Green", text: "How about another sample message", time: "4:01PM"},
      {pic: pa, user: "Paddy", text: "Looks good..", time: "4:02PM"},
      {pic: rm, user: "Robert Marsh", text: "Ok thank should be enough!", time: "4:03PM"},
  ]
  }

  clickedNew = (newText) => {
    var date, TimeType, hour, minutes, fullTime;
    date = new Date();
    hour = date.getHours(); 
    //Set AM or PM
    if(hour <= 11){TimeType = 'AM';}
    else{TimeType = 'PM';}
    if( hour > 12 ){hour = hour - 12;}
    //If the hour shows as 0 convert to 12
    if( hour === 0 ){hour = 12;} 
    minutes = date.getMinutes();
    if(minutes < 10){minutes = '0' + minutes.toString();}
    //Display the time like 4:00PM
    fullTime = hour.toString() + ':' + minutes.toString() + TimeType.toString();
    //Set the elements of the posted message
    let newPic = this.state.userpic
    let newUsername = this.state.username
    let curTime = fullTime;
    this.setState({
      chats: [...this.state.chats,  {pic: newPic, user: newUsername, text: newText, time: curTime}],
    })
}
  
  switchUserRM = () => {
    this.setState({
      username: "Robert Marsh",
      userpic: rm
    })
    console.log("User changed to Rob");
  }
  switchUserAG = () => {
    this.setState({
      username: "Andy Green",
      userpic: ag
    })
    console.log("User changed to Andy");
  }
  switchUserPA = () => {
    this.setState({
      username: "Paddy",
      userpic: pa
    })
    console.log("User changed to Paddy");
  }


  render () {
    return (
      <React.Fragment>
        <BrowserRouter>
        <div id="toolbar"><Toolbar/></div>
        <div id="mainSection">
        <div id="users"><Users 
            switchRM={this.switchUserRM} switchAG={this.switchUserAG} switchPA={this.switchUserPA}/></div>
          <div id="channels"><Channels/></div>
          <MainFeed1 chats={this.state.chats} clickedNew={this.clickedNew} />
          {/* <Switch>
            <Route exact path = "/" render ={() => <MainFeed1 chats={this.state.chats} clickedNew={this.clickedNew} />} />
          </Switch> */}
        </div>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}

export default App;