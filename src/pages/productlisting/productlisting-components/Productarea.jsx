import React from "react";
import ProductCard from "./ProductCard";
import mencat01 from "../../homepage/homepage-images/mencat01.jpg";
import mencat02 from "../../homepage/homepage-images/mencat02.jpg";
import mencat03 from "../../homepage/homepage-images/mencat03.jpg";
import mencat04 from "../../homepage/homepage-images/mencat04.jpg";
import mencat05 from "../../homepage/homepage-images/mencat05.jpg";
import mencat06 from "../../homepage/homepage-images/mencat06.jpg";
import mencat07 from "../../homepage/homepage-images/mencat07.jpg";
import mencat08 from "../../homepage/homepage-images/mencat08.jpg";

const Productarea = () => {
  const mencategory_array = [
    {
      image: mencat01,
      rating: "4",
      title: "Red Pants",
      price: "10",
      category: "Boxers",
    },
    {
      image: mencat02,
      rating: "4.4",
      title: "Blue Pants",
      price: "10",
      category: "Pants",
    },
    {
      image: mencat03,
      rating: "4",
      title: "Red Pants",
      price: "10",
      category: "Boxers",
    },
    {
      image: mencat04,
      rating: "4.4",
      title: "Blue Pants",
      price: "10",
      category: "Pants",
    },
    {
      image: mencat05,
      rating: "4",
      title: "Red Pants",
      price: "10",
      category: "Boxers",
    },
    {
      image: mencat06,
      rating: "4.4",
      title: "Blue Pants",
      price: "10",
      category: "Pants",
    },
    {
      image: mencat07,
      rating: "4",
      title: "Red Pants",
      price: "10",
      category: "Boxers",
    },
    {
      image: mencat08,
      rating: "4.4",
      title: "Blue Pants",
      price: "10",
      category: "Pants",
    },
    {
      image: mencat01,
      rating: "4",
      title: "Red Pants",
      price: "10",
      category: "Boxers",
    },
    {
      image: mencat02,
      rating: "4.4",
      title: "Blue Pants",
      price: "10",
      category: "Pants",
    },
    {
      image: mencat03,
      rating: "4",
      title: "Red Pants",
      price: "10",
      category: "Boxers",
    },
    {
      image: mencat04,
      rating: "4.4",
      title: "Blue Pants",
      price: "10",
      category: "Pants",
    },
    {
      image: mencat05,
      rating: "4",
      title: "Red Pants",
      price: "10",
      category: "Boxers",
    },
    {
      image: mencat06,
      rating: "4.4",
      title: "Blue Pants",
      price: "10",
      category: "Pants",
    },
    {
      image: mencat07,
      rating: "4",
      title: "Red Pants",
      price: "10",
      category: "Boxers",
    },
    {
      image: mencat08,
      rating: "4.4",
      title: "Blue Pants",
      price: "10",
      category: "Pants",
    },
  ];
  return (
    <div className="ProductArea flex flex-wrap gap-12 justify-start items-start grow p-12">
      {mencategory_array.map((product) => {
        return (
          <ProductCard
            image={product.image}
            rating={product.rating}
            title={product.title}
            price={product.price}
            category={product.category}
          />
        );
      })}
      {/* props: image, title, category, price, rating */}
    </div>
  );
};

export default Productarea;
