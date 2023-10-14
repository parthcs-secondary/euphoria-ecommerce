// import React, { useEffect, useRef } from "react";
import "./NewArrival.scss";
import newarr01 from '../../homepage-images/newarr01.png'
import newarr02 from '../../homepage-images/newarr02.jpg'
import newarr03 from '../../homepage-images/newarr03.png'
import newarr04 from '../../homepage-images/newarr04.png'

const NewArrival = () => {
  const newArrivalArray = [
    {
      image: newarr01,
      itemname: "Full Sleeve",
    },
    {
      image: newarr02,
      itemname: "Knitted Joggers",
    },
    {
      image: newarr03,
      itemname: "Active T-Shirts",
    },
    {
      image: newarr04,
      itemname: "Urban Shirts",
    },
    {
      image: newarr01,
      itemname: "Full Sleeve",
    },
    {
      image: newarr02,
      itemname: "Knitted Joggers",
    },
    {
      image: newarr03,
      itemname: "Active T-Shirts",
    },
    {
      image: newarr04,
      itemname: "Urban Shirts",
    },

  ];
  //   const Scrollhandle = () => {
  //   const elRef = useRef();
  //   useEffect(() => {
  //     const el = elRef.current;

  //     if (el) {
  //       const onWheel = event => {
  //         let [x, y] = [event.deltaX, event.deltaY];
  //         let magnitude;
  //         if (x === 0) {
  //           magnitude = y > 0 ? (el.scrollLeft + event.deltaY) : -(el.scrollLeft + event.deltaY) ;
  //         } else {
  //           magnitude = x;
  //         }

  //         el.scrollTo({
  //             left: magnitude,

  //           });
  //       };
  //       el.addEventListener("wheel", onWheel);
  //       return () => el.removeEventListener("wheel", onWheel);
  //     }
  //   }, []);
  //   return elRef;}

  //     //console.log({ x, y, magnitude });
  //   const scrollRef = Scrollhandle();

  return (
    <div className="NewArrival">
      <div className="NewArrival_wrapper">
        <div className="newarrival_title">New Arrival</div>

        <div className="newarrival_carousel"
        // ref={scrollRef}
        >
          {newArrivalArray.map((image, index) => {
            return (
              <div className="newarrival_carousel_itemholder">
                <div
                  className="carousel_image"
                  style={{ backgroundImage: "url(" + image.image + ")" }}
                >
                  {/* <img src={image.image} alt="" /> */}
                </div>
                <div className="carousel_title">{image.itemname}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
