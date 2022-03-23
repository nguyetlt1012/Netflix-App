import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import APIapp from "../../../Client/APIS/APIapp";

export default function WidgetSm() {
  const [newUser, setNewUser] = useState([]);
  useEffect(() =>{
    const getNewUsers = async () =>{
      try{
        const res = await APIapp.get("/users?new=true");
        setNewUser(res.data);
      }
      catch(err){
        console.log(err);
      }
    }
    getNewUsers()
  },[]);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUser.map((item)=>(
           <li className="widgetSmListItem">
           <img
             src={item.profilePic || "https://external-preview.redd.it/4PE-nlL_PdMD5PrFNLnjurHQ1QKPnCvg368LTDnfM-M.png?auto=webp&s=ff4c3fbc1cce1a1856cff36b5d2a40a6d02cc1c3"}
             alt=""
             className="widgetSmImg"
           />
           <div className="widgetSmUser">
             <span className="widgetSmUsername">{item.username}</span>
           </div>
           <button className="widgetSmButton">
             <Visibility className="widgetSmIcon" />
             Display
           </button>
         </li>
        ))}
       
      </ul>
    </div>
  );
}
