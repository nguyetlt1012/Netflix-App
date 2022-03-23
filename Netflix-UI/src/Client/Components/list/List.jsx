import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import {React, useRef,useState} from 'react';
import ListItem from '../listItem/ListItem';
import './List.scss'
const List = ({list}) => {
    // console.log(list);
    const [slideNumber, setSlideNumber] = useState(0);
    const [clickLimit, setClickLimit] = useState(window.innerWidth /230);
    const listRef=useRef();
    const handleClick =(direction) =>{
        let distance=listRef.current.getBoundingClientRect().x-50
        if(direction==="left" && slideNumber > 0){
            setSlideNumber(slideNumber - 1 );
            listRef.current.style.transform= `translateX(${230 + distance}px)`;
        }
        else if( direction=="right" && slideNumber < 10 - clickLimit){
            setSlideNumber(slideNumber+1);
            listRef.current.style.transform= `translateX(${-230 + distance}px)`;
        }
    }
  return <div className='list'>
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
          <ArrowBackIosOutlined className='sliderArrow left' onClick={()=>handleClick("left")}/>
          <div className="container" ref={listRef}>
              {list.content.map((item, index)=>(
                  <ListItem index={index} item={item}/>
              ))}
                
          </div>
          <ArrowForwardIosOutlined className='sliderArrow right' onClick={()=>handleClick("right")}/>
      </div>
  </div>;
};

export default List;
