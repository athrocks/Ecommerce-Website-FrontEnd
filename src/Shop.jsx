import React from "react";
import { HeroSection, NewArrivals, Category, Footer } from "./components";
import content from "./data/content.json";

function Shop() {
  return (
    <div>
      <HeroSection />
      <NewArrivals />

      {content?.pages?.shop?.sections &&
        content?.pages?.shop?.sections?.map((item, index) => (
          <Category key={item?.title + index} {...item} />
        ))}

      <Footer content={content?.footer} />
    </div>
  );
}

export default Shop;
