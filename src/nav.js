import React from 'react';
import './nav.css';
import Logo from './nevis.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {faBell} from '@fortawesome/free-regular-svg-icons'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import {faBookmark} from '@fortawesome/free-regular-svg-icons'
import {faHome} from '@fortawesome/free-solid-svg-icons'
import {faFileAlt} from '@fortawesome/free-regular-svg-icons'
import {faCommentDots} from '@fortawesome/free-regular-svg-icons'
import {faFeatherAlt} from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div>
      <Mobile/> 
    </div>
  )
}

class Mobile extends React.Component {
      render() {
        return (
    <div className="container">

    <div className="nav">
      <p> <FontAwesomeIcon className="twitter" icon={faTwitter}/></p>
     <p><FontAwesomeIcon className="home" icon={faHome}/></p>
      <p> <FontAwesomeIcon className="search" icon={faSearch}/> </p>
      <p> <FontAwesomeIcon className="bell" icon={faBell}/> </p>
      <p> <FontAwesomeIcon className="env" icon={faEnvelope}/> </p>
      <p> <FontAwesomeIcon className="env" icon={faBookmark}/> </p>
      <p> <FontAwesomeIcon className="file" icon={faFileAlt}/> </p>
      <p> <img src={Logo} alt="profile" className ="userpic"/> </p>
      <p> <FontAwesomeIcon className="dots" icon={faCommentDots}/> </p>
      <p className="feather2"> <FontAwesomeIcon className="feather" icon={faFeatherAlt}/> </p>
      </div>

      <div className="text">

<ul>  
      <li>Home</li>
      <li>Search</li>
      <li>Notifications</li>
      <li>Messages</li>
      <li>Bookmarks</li>
      <li>Lists</li>
      <li>Profile</li>
      <li className='more'>More</li>
</ul>

        <div className='button'>        
        <button> Tweet </button>
        </div>

    </div>
    </div>
)}
}

export default App;