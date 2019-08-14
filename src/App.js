import React from 'react';
import './App.css';
import cat from './images/griefandloss.jpg';





class Trends extends React.Component {
  render() {
    return (
      <div className="trendsContainer">
        <h1 className="TrendsTitle"> Trends for you <img id="cog" src="" /></h1>
        <div>
          <TrendItem name="Tom Jones" tweets=" 101K" hashtag="#leaveyourhaton" image={cat}/>
          <TopTrend name="Mia" tweets=" 101K" hashtag="#somethingwitty" />
          <TrendItem name="NHS England" tweets=" 99K" hashtag="#money4nurses" />
          <TrendItem name="Tim Cook" tweets=" 1.1M" hashtag="#flatearth" />
          <TopTrend name="Cat" tweets=" 35M" hashtag="#catsoftwitter" image=""/>
          <a id="showMore"> Show More </a>
        </div>
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
        </div>
      </div>

    )
  }
}


class TrendItem extends React.Component {
  render() {
    return (
      <div className="trendItemContainer">
        <div className="">
          <h3>Trending United Kingdom</h3>
         <p> {this.props.name} Tweeted<br /></p>
         <p>  {this.props.hashtag}</p>
          <p>  {this.props.tweets} Tweets</p>
        </div>
      </div>
    )
  }
}




export default Trends;