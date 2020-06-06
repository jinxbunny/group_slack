import React, { Component } from 'react';
import './Channels.css';

class Channels extends Component{

    state = {
       isShown:true,
       isShown1:false
    }
    show = ()=>{
        this.setState({
            isShown: true
        })
    }
    hide = () =>{
        this.setState({
            isShown: false
        })
    }
    show1 = ()=>{
        this.setState({
            isShown1: true
        })
    }
    hide1 = () =>{
        this.setState({
            isShown1: false
        })
    }
  
     render(){
         return(
            <div id="column">
                <div id="Cats">
                  <div className="categories">
                      <i class="far fa-comment-dots"></i>
                      <p>Threads</p></div>
                  <div className="categories">
                      <i class="fas fa-at"></i>
                      <p>Mentions & reactions</p></div>
                  <div>
                  {this.state.isShown ? 
                    <div>
                        <div className="categories">
                            <i class="far fa-copy"></i>
                            <p>Drafts</p>
                        </div>
                        <div className="categories">
                            <i class="fab fa-slack-hash"></i>
                            <p>Channel browser</p>
                        </div>
                        <div className="categories">
                            <i class="fas fa-user-friends"></i>
                            <p>People</p>
                        </div>
                        <div className="categories">
                            <i class="fas fa-asterisk"></i>
                            <p>Apps</p>
                        </div>
                        <div className="categories">
                            <i class="far fa-file"></i>
                            <p>Files</p>
                        </div>
                        <button onClick={this.hide} id="showHide"><i class="fas fa-arrow-up"></i><p>Show Less</p></button>
                    </div>: 
                    <button onClick={this.show} id="showHide">
                        <i class="fas fa-arrow-down"></i>
                        <p>Show More</p>
                    </button> }
                </div>
                </div>
                <div id="menus">
                    {this.state.isShown1 ? 
                    <div>
                        <button onClick={this.hide1} className="chanButton">
                            <i class="fas fa-caret-down"></i>
                            <p>Channels</p>
                            <i class="fas fa-plus"></i>
                        </button>
                        <div className="channels">
                            <i class="fas fa-lock" ></i>
                            <p>group3</p>
                        </div>
                        <div className="channels">
                            <i class="fab fa-slack-hash"></i>
                            <p>general</p>
                        </div>
                        <div className="channels">
                            <i class="fab fa-slack-hash"></i>
                            <p>private</p>
                        </div>
                    </div>:                    
                        <button onClick={this.show1} className="chanButton">
                        <i class="fas fa-caret-right"></i>
                        <p>Channels</p>
                        <i class="fas fa-plus"></i>
                    </button>}
                    <div className="header">
                        <i class="fas fa-caret-right"></i>
                        <p>Direct Messages</p>
                        <i class="fas fa-plus"></i>
                    </div>
                    <div className="header">
                        <i class="fas fa-caret-right"></i>
                        <p>Apps</p>
                        <i class="fas fa-plus"></i>
                    </div>
                </div>
            </div>
         )
     }
  }
  
  export default Channels;