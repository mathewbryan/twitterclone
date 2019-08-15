import React from 'react';
import gerrardslip from './images/gerrardslip.jpg';
import bbcsport from './images/bbcsport.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import { faRetweet } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faUpload } from '@fortawesome/free-solid-svg-icons'


//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'//
//import {falfa-comment} from '@fortawesome/free-solid-svg-icons'//
import './App.css';

/*class App extends React.Component {
  render (){
    return (
      <div className="App">
        <Tweets />
      
      </div>

    );   
 }
}

class Tweets extends React.Component {
  render (){
    return (
      <div className="components">
        <Profile />
        <Name />
        <Content />
        <Comment />
      </div>

     );
  }
}

class Name extends React.Component {
  render () {
    return (
      <div className="cardname">
        <p> BBC SPORT </p>  
        <p> @bbcsport . 48s </p> 
    
      </div>

    );
  }
}

class Profile extends React.Component {
  render () {
    return (
      <div className="profileimage">
        <img id="bbcpic" alt="icon" src={bbcsport} />
      
      </div>

    );
  }
}

class Content extends React.Component {
  render () {
    return (
      <div className="cardcontent">
        <Contentimage />
        How Stephen Gerrard slipped on his arse and lost the premier league title.
          <div className="cardcontenttwo">
            bbcsport.com/2019/9/14/2079...
          </div>
      </div>

    );
  }
}

class Contentimage extends React.Component {
  render () {
    return (
      <div className="gerrardpic">
        <img id="slippic" alt="slip" src={gerrardslip}/>

      </div>
    );
  }
}
class Comment extends React.Component {
    render () {
      return (
      <div className="cardcomment">
        Reaction Bar
      </div>
  
      );
    }
  }*/


  class App extends React.Component {
    render (){
      return (
        <div className="App">
          <Tweets />
        
        </div>
  
      );   
   }
  }


  class Tweets extends React.Component {
    render (){
      return (
        <div className="components">
            <div className="profileimage">
            <div>
              <img id="bbcpic" alt="icon" src={bbcsport} />
            </div>
               <div>
                  <p id="cardname"> BBC SPORT <span id="at">@bbcsport . 48s</span> </p>  
                  {/* <p id="cardnamethree">  </p> */}
                  <p id="cardcontenttwo">How Stephen Gerrard slipped on his arse and lost the premier league title.</p>
                  <p id="cardcontentthree">bbcsport.com/2019/9/14/2079...</p>
                </div>
            </div>
            
            <div className="cardcontent">
                {/* <p id="cardcontenttwo">How Stephen Gerrard slipped on his arse and lost the premier league title.</p>
                <p id="cardcontentthree">bbcsport.com/2019/9/14/2079...</p> */}
            </div>
            
            <div className="gerrardpic">
               <img id="slippic" alt="slip" src={gerrardslip}/>
            </div>
            
            <div className="cardcomment">
               <p className="mainicon"> <FontAwesomeIcon className = "img" icon = {faComment} /> </p> 
               <p className="mainicon"> <FontAwesomeIcon className = "img" icon = {faRetweet} /> 3 </p> 
               <p className="mainicon"> <FontAwesomeIcon className = "img" icon = {faHeart} /> 127 </p> 
               <p className="mainicon"> <FontAwesomeIcon className = "img" icon = {faUpload} /> </p> 


            </div>
        </div>
  
       );
    }
  }








export default App;
