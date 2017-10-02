import React from 'react'
import { Feed, Icon, Message } from 'semantic-ui-react'
import Mixtapes from '../adapters/mixtapes'

class ActivityFeed extends React.Component {
  constructor(){
    super()

    this.state = {
      lastFiveMixtapes: []
    }
  }

  componentDidMount(){
  const mixtapesSent = Mixtapes.getLastMixtapesSent()
    .then(res => this.setState({ lastFiveMixtapes: res }, () => console.log('should show last 5 mixtapes', this.state)))

  }

  timeCreatedParsed = (timeCreated) => {
  let newArr = []
  timeCreated.replace(/[T,:,Z,-]/g,',').split(',').slice(0,5).map(n => { newArr.push(parseInt(n))})
  return newArr
  }

  timeNow = () => {
    let today = new Date();
    let newArr = [today.getYear(), today.getMonth(), today.getHours(), today.getMinutes()]
    return newArr
  }

  timeElapsed = (timeCreated) => {
    let t = new Date();
    if (t.getUTCFullYear() > this.timeCreatedParsed(timeCreated)[0]){
      return 'a couple months ago'
    } else if ((t.getUTCMonth() + 1) > this.timeCreatedParsed(timeCreated)[1]){
      return 'a couple weeks ago'
    } else if (t.getUTCDate() > this.timeCreatedParsed(timeCreated)[2]){
      return `${t.getUTCDate() - this.timeCreatedParsed(timeCreated)[2]} days ago`
    } else if (t.getUTCHours() > this.timeCreatedParsed(timeCreated)[3]){
      return `${t.getUTCHours() - this.timeCreatedParsed(timeCreated)[3]} hour(s) ago`
    } else if (t.getUTCMinutes() > this.timeCreatedParsed(timeCreated)[4]){
      return `${t.getUTCMinutes() - this.timeCreatedParsed(timeCreated)[4]} minutes ago`
    }
  }

  render(){

    const feedItems =
      this.state.lastFiveMixtapes.map(mixtape => {
        return (<Feed.Event>
          <Feed.Label>
            <img src={mixtape.playlist_picture} />
          </Feed.Label>
          <Feed.Content>
            <Feed.Summary>
              {mixtape.sender_name} sent <a target="_blank" href={"http://localhost:3001/mixtapes/listen?" + mixtape.url}>{mixtape.name}</a><br/>
              <Feed.Date>{this.timeElapsed(mixtape.created_at)}</Feed.Date>
            </Feed.Summary>
            {/* <Feed.Meta>
              <Feed.Like>
                <Icon name='like' />
                4 Likes
              </Feed.Like>
            </Feed.Meta> */}
          </Feed.Content>
        </Feed.Event>
      )}
    )

    return(
      <Feed className="feed">
        <Message id="recently-sent-mixtapes">
        <Message.Header>
          Recently sent mixtapes
        </Message.Header>
      </Message>
        {feedItems}
      </Feed>
    )
  }
}

export default ActivityFeed
