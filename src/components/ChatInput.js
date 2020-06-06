import React from 'react';
import MainFeed1 from './MainFeed1';
import './ChatBox.css';
import chatleft from '../img/textbox_left.png';
import chatright from '../img/textbox_right.png';


const ChatInput = () => {
    return (
        <div>
        <input placeholder="Message group3" id="messageIn" value={MainFeed1.newMessage} onChange={MainFeed1.updatedMessage}></input>
        <div id="underInput">
            <div id="uiLeft"><img src={chatleft} alt="text pic"/></div>
            <div id="uiRight"><img src={chatright} alt="text pic"/></div>
        </div>
        <button onClick={MainFeed1.clickedNew}>Post Message</button> <button onClick={MainFeed1.switchUserRM}>Rob</button> <button onClick={MainFeed1.switchUserAG}>Andy</button> <button onClick={MainFeed1.switchUserPA}>Paddy</button><button onClick={MainFeed1.clickedChange}>change channel</button>
        </div>
    )
}

export default ChatInput;