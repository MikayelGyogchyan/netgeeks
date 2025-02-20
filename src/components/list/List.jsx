import React, { useRef, useState } from 'react'
import ListItem from '../listitem/ListItem'
import "./list.scss"

export default function List() {

    const [isMoved, setisMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef();

    const handleClick = (direction) => {
      setisMoved(true)
      let distance = listRef.current.getBoundingClientRect().x - 50;

      if(direction === "left" && slideNumber > 0) {
          setSlideNumber(slideNumber - 1)
        listRef.current.style.transform = `translateX(${230 + distance}px)`;
      }
      if(direction === "right" && slideNumber < 5) {
          setSlideNumber(slideNumber + 1);
        listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      }
    }
  return (
    <div className='list'>
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <img className='sliderArrow left' width="25px" src="https://www.seekpng.com/png/full/57-572816_gallery-left-arrow-left-arrow-white-icon.png" alt="" 
             onClick={() => handleClick("left")}
             style={{display: !isMoved && "none"}} />
        <div className="container" ref = {listRef}>
          <ListItem index={0}/>
          <ListItem index={1}/>
          <ListItem index={2}/>
          <ListItem index={3}/>
          <ListItem index={4}/>
          <ListItem index={5}/>
          <ListItem index={6}/>
          <ListItem index={7}/>
          <ListItem index={8}/>
          <ListItem index={9}/>
        </div>
        <img className='sliderArrow right' width="25px" src="img/arrowright.png" alt="" onClick={() => handleClick("right")} />
      </div>
    </div>
  )
}
