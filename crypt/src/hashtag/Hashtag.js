import React, {Component} from 'react';
import './Hashtag.css';
import Header from '../components/header'

import Top from './Top'
import Trends from './Trends'
import Feed from './Feeds'
import Spinner from './Spinner'

import {APIKey, tweetData} from '../twitterConfig'

class Hashtag extends Component{

  constructor(){
    super();
    this.state = {
      searchTweet: '',
      feeds: {},
      no_data: false,
      inputValue: '',
      searchWords: ['trends', 'bitcoin', 'ethereum', 'dogecoin', 'solana', 'terra']
    }
  }

componentDidMount (){
  this.tweet()
}

async tweet(e) {
  var Tweeter = require('twit')
  var T = new Tweeter(APIKey)
  var query = 'trending'

  let params = {
    q: e === undefined ? query : e === '' ? query : e,
    count: 30
  }

  // await T.get('search/tweets', params, (err, data, response)=>{
  //   if(data.statuses.length <= 0){
  //     this.setState({no_data: true})
  //   } else {
  //     this.setState({feeds: tweetData(data.statuses)})
  //   }
  //   });
  }

  change(e){
    this.setState({inputValue: e.target.value})
  }

  click(){
    this.searchedWords(this.state.inputValue)
    this.tweet(this.state.inputValue)
  }

  searchedWords(word){
    let initialWords = this.state.searchWords
    let newWord = initialWords.filter(w => {
      return w !== word
    })

    newWord.unshift(word)
    this.setState({searchWords: newWord})    
    this.tweet(word)
  }

  render(){

    let spinner = <div className="feed spin">
                    <Spinner />
                  </div>

    return(
      <div className="App-container">
        {/* header */}
        <Header/>
        <Top 
          click={()=>this.click()}
          inputValue={this.state.inputValue}
          change={(e)=>this.change(e)}/>
          {/* body */}
          <div className="body">
            <hr/>
            {/* trends */}
            <Trends 
              searched={this.state.searchWords}
              click={(word)=>this.searchedWords(word)}/>

            {/* feeds */}
            <div className="feeds">
              {/* <Feed /> */}
              {this.state.feeds.length === undefined || 
                  this.state.feeds.length === 0 ? spinner : 
                    this.state.no_data === null ? <Feed noData={true} /> :
                    <Feed 
                      clickTags={(hash)=>this.searchedWords(hash)}
                      feeds={this.state.feeds}/>}
            </div>
            {/* end of feeds */}
          </div>
        
        {/* footer */}
        <div className="footer">{/* enter footer here */}</div>
      </div>
  )}
}

export default Hashtag;