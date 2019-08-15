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
        <h1 className="TrendsTitle"> Trends for you <img id="cog" src={cog} /></h1>
        <div>
          <TrendItem name="Tom Jones" tweets=" 101K" hashtag="#leaveyourhaton" />
          <TopTrend name="Mia" tweets=" 101K" hashtag="#somethingwitty" trendimage={sky}  />
          <TrendItem name="NHS England" tweets=" 99K" hashtag="#money4nurses" />
          <TrendItem name="Tim Cook" tweets=" 1.1M" hashtag="#flatearth" />
          <TopTrend name="Cat" tweets=" 35M" hashtag="#catsoftwitter" trendimage={cat} />
          <a id="showMore"> Show More </a>
          <Follow />
        </div>
      </div>
      </div>
    )
  }
}

class Search extends React.Component {
  state = {
    textEntry: []
  }
  render() {
    return(
      <div className="searchArea"> 
      <input id="searchfield" type="text"/>
      <img id="searchIcon" src={search}/>
      <h2 id="searchTitle"></h2>
      </div>
    )
  }
}

class TopTrend extends React.Component {
  

  render() {
    
    return (
      <div className="topTrendingTweetContainer">
        <div className="trendingTweetContent">
          <h3>Trending United Kingdom</h3>
          <p> {this.props.name} Tweeted <br /></p>
          <p>  {this.props.hashtag} <br /></p>
          <p> {this.props.tweets} Tweets</p>
          <img id="trendImage" src={this.props.trendimage}/>
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
         <p> {this.props.name} Tweeted<br /></p>
         <p>  {this.props.hashtag}</p>
          <p>  {this.props.tweets} Tweets</p>
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
    <img id="followImage" src={props.followImage} />
    {props.name}
    <button id="followButton"> Follow </button>
    </div>
  )
}



export default App;