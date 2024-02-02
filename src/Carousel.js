import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";

 function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);
  
  const currCard = photos[currCardIdx];
  const total = photos.length;  

  const goForward = (e) => {
    setCurrCardIdx((currCardIdx) => currCardIdx + 1);
  }

   const goBackward = (e) => {
    setCurrCardIdx((currCardIdx) => currCardIdx - 1);
  }

  return (

    <div className="Carousel">

      <h1>{title}</h1>
      <div className="Carousel-main">
        <i
          className="bi bi-arrow-left-circle"
          hidden={currCardIdx === 0 ? "hidden" : null}
          onClick={goBackward}
        />
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        <i
          className="bi bi-arrow-right-circle"
          hidden={currCardIdx === total - 1 ? "hidden" : null}
          onClick={goForward}
        />
        
      </div>
    </div>
  );
}

export default Carousel;
