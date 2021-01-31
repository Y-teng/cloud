import React from "react";
import { getSongUrl ,getLyric} from "../util/axios";

class Play extends React.Component {
  constructor() {
    super();
    this.state = {
      songUrl: "",
      lyric:""
    };
  }
  componentDidMount() {
    console.log(this.props, "属性");
    getSongUrl({id:this.props.location.state.id})
    .then(res=>{
        if(res.code ===200){
            console.log(res,"内容");
            this.setState({
                songUrl:res.data[0].url
            })
        }
    })

    getLyric({id:this.props.location.state.id})
    .then(res=>{
        if(res.code ===200){
            console.log(res,"歌词");
            this.setState({
                lyric:res.lrc.lyric
            }) 
        }
    })
  }
  render() {
      const {songUrl,lyric} = this.state
    return (
      <div>
        <h1>Play </h1>
        <h1>接收到的query参数是---{this.props.location.state.id}</h1>
        {/* <audio src={songUrl} controls autoPlay></audio> */}
        <audio src={songUrl} controls></audio>
        {lyric}
      </div>
    );
  }
}
export default Play;
