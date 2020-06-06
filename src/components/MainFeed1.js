import React, {Component} from 'react';
import { animateScroll } from "react-scroll";
import ChatBox from './ChatBox';
import './MainFeed.css';
import details from '../img/details.png';
import chatleft from '../img/textbox_left.png';
import chatright from '../img/textbox_right.png';
import slackIcon from '../img/slackicon.png'



class MainFeed1 extends Component{
        state = {
        newText: ""
    }

    componentDidMount() {
        this.scrollToBottom();
    }
    componentDidUpdate() {
        this.scrollToBottom();
    }
    scrollToBottom() {
        animateScroll.scrollToBottom({
          containerId: "chatSection"
        });
    }

    updatedMessage = event => {
        this.setState({ newText: event.target.value });
    };

    handleClear = (props) => {
        this.setState({ newText: "" })
    }

    render (){
        let allChats = this.props.chats.map((chat, index) => {
            return <ChatBox key = {index} text = {chat.text} user = {chat.user} pic = {chat.pic} time = {chat.time}/>
    })

        return (
        <div id="mainFeed">
            <div id="chatTop">
                <div id="topLeft">
                    <p id="groupName"><i class="fas fa-lock" ></i> group3 <i class="far fa-star"></i></p>
                    <p id="underTitle"><i class="far fa-user"></i> 4  |  Add a topic</p>
                </div>
                <div id="topLeftMob">
                <img src={slackIcon} alt="Slack Icon"/><span id="groupName"><i class="fas fa-lock" ></i> #group3</span>
                </div>
                <div id="topRight"><img src={details} alt="details"/></div> 
            </div>
           <div id="chatSection" >
           {allChats}
           </div>
           <div id="inputSection" className={this.props.newMessage}>
           <input 
                placeholder="Message group3"
                id="messageIn"
                value={this.state.newText}
                onChange={this.updatedMessage}
                onKeyDown={(event) => {
                    if (event.keyCode === 13) {
                        this.props.clickedNew(this.state.newText);
                        this.handleClear()
                    }
                }}
            >
            </input>
               <div id="underInput">
                   <div id="uiLeft"><img src={chatleft} alt="text pic"/></div>
                   <div id="uiRight"><img src={chatright} alt="text pic"/></div>
               </div>
           </div>
        </div>
    );
}
}


export default MainFeed1;