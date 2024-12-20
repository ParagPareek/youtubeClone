import React, { useEffect, useState } from 'react'
import './feed.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import { API_KEY, value_converter } from '../../Data'
import { Link } from 'react-router-dom'
import moment from 'moment'
const Feed = ({ category, search }) => {
    const [data, setData] = useState([])
    const [originaldata, setOriginaldata] = useState([])
    const fetchData = async () => {
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY} `
        await fetch(videoList_url).then(response => response.json()).then(data => (setData(data.items),setOriginaldata(data.items)))

    }
    useEffect(() => {
        fetchData();
    }, [category])
    console.log(search)

useEffect(()=>{
    const SearchFilter= originaldata.filter((item)=>{
        return (
            item.snippet.title.toLowerCase().includes(search?.toLowerCase() ||"")
        )
    })
    setData(SearchFilter)
    
},[search])
    return (
        <div className="feed">
            {data.map((item, index) => {
                return (
                    <Link to={`vedio/${item.snippet.categoryId}/${item.id}`} className='card'>
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <h2>{item.snippet.title}</h2>
                        <h3>{item.snippet.channelTitle}</h3>
                        <p>{value_converter(item.statistics.viewCount)}view  &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                    </Link>

                )
            })}

        </div>
    )
}

export default Feed