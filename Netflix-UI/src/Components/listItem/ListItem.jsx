import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import APIapp from "../../APIS/APIapp";
import "./ListItem.scss";



const ListItem = ({ index , item}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({})
  let navigate = useNavigate();
  const handleClick =() =>{
    navigate('/watch', {state: movie})
  }
  useEffect(()=>{
    const getMovie = async () =>{
      try{
        const movie = await APIapp.get(`/movies/find/${item}`)
      //  console.log(movie.data);
        setMovie(movie.data);
      }catch(err){
        console.log(err)
      }
    }
    getMovie();
  },[item])


  const trailer = "https://cdn.videvo.net/videvo_files/video/free/2019-01/large_watermarked/181015_13_Venice%20Beach%20Drone_25_preview.mp4";
  return (
    <div
      className="listItem"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onClick={handleClick}
    >
      <img
        alt=""
        src='https://ecdn.game4v.com/g4v-content/uploads/2020/06/Black-Clover-1-game4v.png'
      />
      {isHovered && (
        <>
       
          <video src={movie== null ? trailer : movie.trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hours 15 mins</span>
              <span className="limit">+{movie == null ? "NULL" : movie.limit }</span>
              <span>{movie == null ? "NULL" : movie.year}</span>
            </div> 
            <div className="desc">
              {movie == null ? "NULL" : movie.desc}
            </div>
            <div className="genre">{movie == null ? "NULL" : movie.genre}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
