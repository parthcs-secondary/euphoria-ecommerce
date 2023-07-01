// import React, { useEffect, useRef } from "react";
import "./NewArrival.scss";

const NewArrival = () => {
  const newArrivalArray = [
    {
      image: "https://placehold.co/262/red/white",
      itemname: "Knitted Joggers",
    },
    {
      image: "https://placehold.co/262/green/white",
      itemname: "Knitted Joggers",
    },
    {
      image: "https://placehold.co/262/blue/white",
      itemname: "Knitted Joggers",
    },
    {
      image: "https://placehold.co/262/orange/white",
      itemname: "Knitted Joggers",
    },
    {
      image: "https://placehold.co/262/gray/white",
      itemname: "Knitted Joggers",
    },
    {
      image: "https://placehold.co/262/red/white",
      itemname: "Knitted Joggers",
    },
    {
      image: "https://placehold.co/262/pink/white",
      itemname: "Knitted Joggers",
    },
    {
      image: "https://placehold.co/262/orange/white",
      itemname: "Knitted Joggers",
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
