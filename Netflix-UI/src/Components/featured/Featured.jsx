import { PlayArrow,InfoOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./Featured.scss";
import APIapp from '../../APIS/APIapp.js' ;

const Featured = ({type}) => {
  const [content, setContent] = useState({});

  useEffect(()=>{
    const getRandomContent = async () =>{
      try{
        const res = await APIapp.get(`/movies/random?type=${type}`);
        setContent(res.data[0]);
        console.log('get api movie random' + type + " " , res.data[0]);
      }catch(err){
        console.log(err);
      }
    }
    getRandomContent()
    
  },[type])
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span> {type==="movie" ? "Movies" : "Series" }</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src={content == null ? "https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" : content.img }
        alt=""
      />
      <div className="info">
        <img
          src={ content == null ? "https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1" : content.imgTitle}
          alt=""
        />
        <span className="desc">
          {content == null ? "NULL" : content.desc }
        </span>
        <div className="buttons">
            <button className="play">
                <PlayArrow/>
                <span>Play</span>
            </button>
            <button className="more">
              <InfoOutlined/>
              <span>Info</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
