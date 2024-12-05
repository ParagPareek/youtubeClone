import React, { useState ,useEffect} from 'react'
import './Playvedio.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY, value_converter } from '../../Data'
import moment from 'moment'
import { useParams } from 'react-router-dom'
const Playvedio = ({vedioId}) => {
    
    const [apidata, setApidata] = useState(null)
    const [channeldata,setChanneldata] = useState(null)
    const [commentdata,setcommentdata] = useState([])

    
    const fetchVideoData = async()=>{
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${vedioId}&key=${API_KEY}`
        await fetch(videoDetails_url).then(response=>response.json()).then(data=>setApidata(data.items[0]))
    }

    const fetchotherdata = async()=>{

        if (!apidata) return;

        const channeldata_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apidata.snippet.channelId}&key=${API_KEY}`;
        await fetch(channeldata_url)
        .then(response => response.json())
        .then(data => setChanneldata(data.items[0]));

        const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&order=relevance&videoId=${vedioId}&key=${API_KEY}`;
        await fetch(comment_url)
        .then(response => response.json())
        .then(data => setcommentdata(data.items)); 
    }


    useEffect(()=>{
        fetchVideoData()
    },[vedioId])

    useEffect(()=>{
        fetchotherdata()
    },[apidata])
  return (
    <div className="play-video">
        {/*<video src={video1} controls autoPlay muted></video>*/}
        <iframe  src={`https://www.youtube.com/embed/${vedioId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <h3>{apidata ?apidata.snippet.title:"Title Here"}</h3>
        <div className="play-video-info">
            <p>{apidata?value_converter(apidata.statistics.viewCount):"16K"} Views &bull; {apidata ? moment(apidata.snippet.publishedAt).fromNow() : ""} </p>
            <div>
                <span><img src={like} alt="" />{apidata?value_converter(apidata.statistics.likeCount):155}</span>
                <span><img src={dislike} alt="" />2</span>
                <span><img src={share} alt="" />Share</span>
                <span><img src={save} alt="" />Save</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={channeldata?channeldata.snippet.thumbnails.default.url:""} alt="" />
            <div>
                <p>{apidata?apidata.snippet.channelTitle:""}</p>
                <span>{channeldata?value_converter(channeldata.statistics.subscriberCount):""} Subscriber</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="video-description">
            <p>{apidata?apidata.snippet.description.slice(0,250):"Discription"}</p>
            <hr />
            <h4>{apidata?value_converter(apidata.statistics.commentCount):102}</h4>
            {commentdata.map((item,index)=>{
                return (
                    <div key={index} className="comment">
                        <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                        <div>
                            <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
                            <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                            <div className="comment-action">
                                <img src={like} alt="" />
                                <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount) }</span>
                                <img src={dislike} alt="" />
                            </div>
                        </div>
                    </div>
                )
            })}
            
        </div>
    </div>
  )

}

export default Playvedio