import React, { useEffect, useState } from "react";
import APIapp from "../../APIS/APIapp";
import Featured from "../../Components/featured/Featured";
import List from "../../Components/list/List";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.scss";

const Home = ({ type }) => {
  const [list, setList] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await APIapp.get(
          `/lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`
        );

        // console.log(res.headers['content-type']);
        setList(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomList();
  }, [type]);

  return (
    <div className="home">
      <Navbar />
      {/* <img
            width="100%"
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          /> */}
      <Featured type={type} />
      {list.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
};

export default Home;
