import React from 'react';
import './trends.css';
import cat from './images/griefandloss.jpg';
import cog from './images/cog.svg';
import search from './images/search.svg';
import sky from './images/skyimage.jpeg';

class App extends React.Component {
  render() {
    return (
      <div>
        <Trends />
      </div>
    )
  }
}



class Trends extends React.Component {
  render() {
    return (
      <div className="searchBox">
      <Search/>
      <div className="trendsContainer">
        <div className="trend-wrapper space">
          <h1 className="TrendsTitle"> Trends for you </h1>
          <img alt="cog" id="cog" src={cog} />
        </div>
        <div>
          <TrendItem name="Tom Jones" tweets=" 101K" hashtag="#leaveyourhaton" />
          <TopTrend name="Mia" tweets=" 101K" hashtag="#somethingwitty" trendimage={sky}  />
          <TrendItem name="NHS England" tweets=" 99K" hashtag="#money4nurses" />
          <TrendItem name="Chris Hadfield" tweets=" 1.1M" hashtag="#flatearth" />
          <TopTrend name="Cat" tweets=" 35M" hashtag="#catsoftwitter" trendimage={cat} />
          <a href="twitter.com" id="showMore"> Show More </a>
          <Follow />
        </div>
      </div>
      </div>
    )
  }
}

class Search extends React.Component {

  render() {
    return(
      <div className="searchArea"> 
      <input id="searchfield" type="text"/>
      <img alt = "search icon" id="searchIcon" src={search}/>
      </div>
    )
  }
}

class TopTrend extends React.Component {
  

  render() {
    
    return (
      <div className="topTrendingTweetContainer">
        <div className="trendingTweetContent">
          <div className = "trend-wrapper">
          <div className = "trend-padder">
            <h3>Trending</h3>
            <div>
              <p className = "p"> {this.props.name} Tweeted <br /></p>
              <p className = "p">  {this.props.hashtag} <br /></p>
              <p className = "p"> {this.props.tweets} Tweets</p>
            </div>
          </div>
            <img alt = "trend" id="trendImage" src={this.props.trendimage}/>
          </div>
        </div>
      </div>
    )
  }
}


class TrendItem extends React.Component {
  render() {
    return (
      <div className="trendItemContainer">
        <div className="trendItem">
          <h3>Trending United Kingdom</h3>
         <p className = "p"> {this.props.name} Tweeted<br /></p>
         <p className = "p">  {this.props.hashtag}</p>
          <p className = "p">  {this.props.tweets} Tweets</p>
        </div>
      </div>
    )
  }
}

class Follow extends React.Component{
  render(){
    return(
      <div className="whotofollow">
        <h1> Who to follow </h1>
        <PeopletoFollow followImage={cat} name="Marty" />
        <PeopletoFollow followImage={cat} name="Biff" />
        <PeopletoFollow followImage={cat} name="Jenny" />
      </div>
    )
  }
}

const PeopletoFollow = (props) => {
  return(
    <div className="PeopletoFollow">
    <img alt="follow" id="followImage" src={props.followImage} />
    {props.name} 
    <button id="followButton"> Follow </button>
    </div>
  )
}



export default App;