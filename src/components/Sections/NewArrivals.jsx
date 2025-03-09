import React from "react";
import { Card, SectionHeading } from "..";
import Jeans from "../../assets/img/jeans.jpg";
import Shirts from "../../assets/img/shirts.jpg";
import Tshirt from "../../assets/img/tshirts.jpeg";
import dresses from "../../assets/img/dresses.jpg";
import Joggers from "../../assets/img/joggers.jpg";
import Kurtis from "../../assets/img/kurtis.jpg";
import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const items = [
  {
    title: "Jeans",
    imagePath: Jeans,
  },
  {
    title: "Shirts",
    imagePath: Shirts,
  },
  // {
  //   title: "T-Shirts",
  //   imagePath: Tshirt,
  // },
  {
    title: "Dresses",
    imagePath: dresses,
  },
  {
    title: "Joggers",
    imagePath: Joggers,
  },
  {
    title: "Kurtis",
    imagePath: Kurtis,
  },
];

function NewArrivals() {
  return (
    <>
      <SectionHeading title={"New Arrivals"} />
      <Carousel
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={false}
        showDots={false}
        infinite={false}
        partialVisible={false}
        itemClass={"react-slider-custom-item"}
        className="px-8"
      >
        {items &&
          items?.map((item, index) => (
            <Card
              key={item?.title + index}
              title={item.title}
              imagePath={item.imagePath}
            />
          ))}
      </Carousel>
    </>
  );
}

export default NewArrivals;
