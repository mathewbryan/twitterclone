import React from 'react';
import './App.css';


class Trends extends React.Component {
  render(){
    return(
      <div className="trendsContainer">
      <h1 className="TrendsTitle"> Trends for you <img id="cog" src=""/></h1>
      <div>
        <TopTrend name="Mia" tweets=" 101K" hashtag="#somethingwitty" />
        <TrendItem name="Tom Jones" tweets=" 101K" hashtag="#leaveyourhaton"/>
        <TrendItem name="NHS England" tweets=" 99K" hashtag="#money4nurses"/>
        <TrendItem name="Tim Cook" tweets=" 1.1M" hashtag="#flatearth"/>
        <TopTrend name="Cat" tweets=" 35M" hashtag="#catsoftwitter" />
        <a id="showMore"> Show More </a>
        </div>
      </div>

    )
  }
}

class TopTrend extends React.Component {
  render(){
    return(
      <div className="topTrendingTweetContainer">
        <div className="trendingTweetContent">  
        <h3>Trending United Kingdom</h3>        
        {this.props.name} Tweeted <br/>
        {this.props.hashtag} <br/>
        {this.props.tweets} Tweets
        </div>
      </div>

    )
  }
}




class TrendItem extends React.Component {
  render(){
    return(
      <div className="trendItemContainer">
        <div className="">    
        <h3>Trending United Kingdom</h3>      
        {this.props.name} Tweeted<br/> 
        {this.props.hashtag}
        <br/>
        {this.props.tweets} Tweets
        </div>
      </div>
    )
  }
}




export default Trends;
