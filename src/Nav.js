import React from 'react';
import './nav.css';
import logo from './logo.svg'
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

function Nav() {
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
      <p className="nav-icons"> <FontAwesomeIcon className="twitter" icon={faTwitter}/></p>
     <p className="nav-icons"><FontAwesomeIcon className="home" icon={faHome}/></p>
      <p className="nav-icons"> <FontAwesomeIcon className="search" icon={faSearch}/> </p>
      <p className="nav-icons"> <FontAwesomeIcon className="bell" icon={faBell}/> </p>
      <p className="nav-icons"> <FontAwesomeIcon className="env" icon={faEnvelope}/> </p>
      <p className="nav-icons"> <FontAwesomeIcon className="env" icon={faBookmark}/> </p>
      <p className="nav-icons"> <FontAwesomeIcon className="file" icon={faFileAlt}/> </p>
      <p className="nav-icons"> <img className = "profile" src={logo} alt="profile" /> </p>
      <p className="nav-icons"> <FontAwesomeIcon className="dots" icon={faCommentDots}/> </p>
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

        <div className='button-area'>        
        <button className = 'button'> Tweet </button>
        </div>

    </div>
    </div>
)}
}

export default Nav;