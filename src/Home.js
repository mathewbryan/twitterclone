import React from 'react';
import './App.css';
import logo from './logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages } from '@fortawesome/free-regular-svg-icons'
import { faSquare } from '@fortawesome/free-regular-svg-icons'
import { faChartBar } from '@fortawesome/free-regular-svg-icons'
import { faSmile } from '@fortawesome/free-regular-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

function Home() {
    return (
        <div className = "wrapper">
            <div className = "home">
                <h4>Home</h4>
            </div>
            <div className = "tweetArea">
                <img className = "profile" src = {logo} alt="thing" />
                <textarea placeholder = "What's happening?" className="tweetInput" type="text"></textarea>
            </div>
            <IconBarButton />
        </div>
    )
}

const icons = [
    <FontAwesomeIcon className="img" icon={faImages} />,
    <FontAwesomeIcon className="img" icon={faSquare} />,
    <FontAwesomeIcon className="img" icon={faChartBar} />,
    <FontAwesomeIcon className="img" icon={faSmile} />,
    <FontAwesomeIcon className="img" icon={faCircle} />,
    <FontAwesomeIcon className="img" icon={faPlusCircle} />,
]

function IconBarButton(){
    return(
        <div className = "tweetBar">
            <div className = "left-icons">
                {renderIcon(0)}
                {renderIcon(1)}
                {renderIcon(2)}
                {renderIcon(3)}
            </div>
            
            <div className = "right-icons">
                {renderIcon(4)}
                <div className = "border"></div>
                {renderIcon(5)}
                <button className = "tweetSubmit">
                Tweet
                </button>
            </div>
            
        </div> 
    )
}

function renderIcon(i){
    let isIconPlus = (i === 5) ? "icons plus" : "icons"
    return (
        <button className = {isIconPlus}> {icons[i]} </button>
    )
}

export default Home;