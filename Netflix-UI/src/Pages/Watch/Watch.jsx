import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./Watch.scss";

const Watch = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div className="watch">
      <Link to='/'>
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      </Link>
      <video
        className="video"
        autoPlay
        progress
        controls
        src={location.state.video}/>
    </div>
  );
};

export default Watch;
