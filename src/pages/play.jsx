import React from "react";
//引入play.css文件
import '../assets/css/play.css'
//引入静态图片
// import playtop from "../assets/images/playtop.png";
//引入封装好的接口
import { getSongUrl, getLyric } from '../util/axios'


// 引入导航链接
// import { NavLink, Link } from "react-router-dom";
// import ReactDOM from 'react-dom';


class Play extends React.Component {
  constructor() {
    super();
    this.state = {
      songUrl: "",
      lyric: ""
    };
  }
  componentDidMount() {
    console.log(this.props, "属性");
    getSongUrl({ id: this.props.location.state.id })
      .then(res => {
        if (res.code === 200) {
          console.log(res, "内容");
          this.setState({
            songUrl: res.data[0].url
          })
        }
      })

    getLyric({ id: this.props.location.state.id })
      .then(res => {
        if (res.code === 200) {
          console.log(res, "歌词");
          this.setState({
            lyric: res.lrc.lyric
          })
        }
      })
  }
  // 封装一个 点击暂停的方法
  clickIcon(e) {
    console.log(e);
    console.log(e.target.nextSibling);
    // console.log(e.target.id);
    if (e.target.id !== "") {
      e.target.id = "";
      e.target.nextSibling.pause()

    } else {
      e.target.id = "display";
      e.target.nextSibling.play()
    }
  }

  render() {
    const { query, songUrl, lyric } = this.state;
    return (
      <div >
        <div className='content'>
          {/* logo */}
          <div className='m-logo '>
            {/* <img    src={playtop}></img> */}
          </div>

          {/* <h1>接收到的query参数是---{query.id}</h1> */}
          {/* 播放器 */}
          <div className='m-song-disc'>
            <div className='m-song-turn'>
              <div className='m-song-rollwrap'>
                <div className='m-song-img a-circling z-pause'>
                  <img className='u-img' alt="song-img" src={this.props.location.state.picUrl} />

                </div>
              </div>
            </div>
            {/* 播放 */}
            {/* <span className='m-song-plybtn'src={songUrl}> */}
            {/* <audio   src={songUrl} controls autoPlay></audio> */}
            {/* <audio   src={songUrl}  autoPlay></audio> */}

            <div onClick={this.clickIcon.bind(this)}>
              <i className="iconfont icon-bofang bofang" ></i>
              <audio src={songUrl}></audio>
            </div>


            {/* </span> */}

          </div>

          {/* 歌词 */}
          <div className='songer'>
            <ul className="songer_ul">
              <li className="songer_li">{lyric}</li>
            </ul>
          </div>
        </div>

      </div>
    );
  }
}
export default Play;
