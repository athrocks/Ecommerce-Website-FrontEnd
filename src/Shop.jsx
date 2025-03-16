import React, { useEffect } from "react";
import { HeroSection, NewArrivals, Category, Footer } from "./components";
import content from "./data/content.json";
import { fetchCategories } from "./api/fetchCategories";
import { useDispatch } from "react-redux";
import { loadCategories } from "./store/features/category";
import { setLoading } from "./store/features/common";

function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    fetchCategories()
      .then((res) => {
        console.log("Categories ", res);
        dispatch(loadCategories(res));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  }, [dispatch]);

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
