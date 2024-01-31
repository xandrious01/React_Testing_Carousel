import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";

 function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  console.log(currCard);
  const total = photos.length;

  const [counter, setCounter] = useState(0);
  

  const goForward = () => {
    setCurrCardIdx((currCardIdx) => currCardIdx + 1);
  }

   const goBackward = () => {
    setCurrCardIdx((currCardIdx) => currCardIdx - 1);
  }

  return (

    <div className="Carousel">

      <h1>{title}</h1>
      <div className="Carousel-main">
        <i
          className="bi bi-arrow-left-circle"
          disable={(currCardIdx === 0) ? "true" : "false"}
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
          disable={(currCardIdx === total - 1) ? "true" : "false"}
          onClick={goForward}
        />
      </div>
    </div>
  );
}

export default Carousel;
