import React from 'react';
import gerrardslip from './images/gerrardslip.jpg';
import bbcsport from './images/bbctwitter.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import { faRetweet } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faUpload } from '@fortawesome/free-solid-svg-icons'



import './tweet.css';




class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Tweets />
        <Tweets />
        <Tweets />
      </div>
    );
  }
}


class Tweets extends React.Component {
  render() {
    return (
      <div className="components">
        <Top />
        <Image />
        <ReactionBar />
      </div>
    );
  }
}

function Top() {
  return(
    <div className="profileimage">
      <img className="profile bbcpic" alt="icon" src={bbcsport} />
      <div className="feed-wrapper">
        <p id="cardname"> BBC SPORT <span id="at">@bbcsport . 48s</span> </p>
        <p id="cardcontenttwo">How Stephen Gerrard slipped on his arse and lost the premier league title.<a href="bbcsport.com/2019/9/14/2079"> bbcsport.com/2019/9/14/2079...</a> </p>
      </div>
    </div>
  )
}

function Image(){
  return(
  <div className="gerrardpic">
    <img id="slippic" alt="slip" src={gerrardslip} />
  </div>
  )
}

function ReactionBar() {
  return(
    <div className="cardcomment">
      <p className="mainicon"> <FontAwesomeIcon className="img" icon={faComment} /> </p>
      <p className="mainicon"> <FontAwesomeIcon className="img" icon={faRetweet} /> 3 </p>
      <p className="mainicon"> <FontAwesomeIcon className="img" icon={faHeart} /> 127 </p>
      <p className="mainicon"> <FontAwesomeIcon className="img" icon={faUpload} /> </p>
    </div>
  )
}

export default App;
