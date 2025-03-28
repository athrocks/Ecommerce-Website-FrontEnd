import React, { useEffect, useMemo, useState } from "react";
import {
  Categories,
  ColorsFilter,
  FilterIcon,
  PriceFilter,
  SizeFilter,
} from "../../components";
import content from "../../data/content.json";
import ProductCard from "./ProductCard";
import { getAllProducts } from "../../api/fetchProducts";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../store/features/common";

const categories = content?.categories;

const ProductListPage = ({ categoryType }) => {
  const categoryData = useSelector((state) => state?.categoryState?.categories);
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  const categoryContent = useMemo(() => {
    return categories?.find((category) => category.code === categoryType);
  }, [categoryType]);

  const productListItems = useMemo(() => {
    return content?.products?.filter(
      (product) => product?.category_id === categoryContent?.id
    );
  }, [categoryContent]);

  // returns women category if on women page and so on...
  const category = useMemo(() => {
    return categoryData.find((elem) => elem?.code === categoryType);
  }, [categoryData, categoryType]);

  useEffect(() => {
    dispatch(setLoading(true));

    console.log(
      "CategoryId: " + category?.id + " CategoryName: " + category?.name
    ); // Debugging

    getAllProducts(category?.id)
      .then((res) => {
        console.log("Fetched Products for:" + category?.name, res); // Debugging
        setProducts(res);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  }, [category?.id, dispatch]);

  return (
    <div>
      <div className="flex">
        <div className="w-[20%] p-[10px] border rounded-lg m-[20px]">
          {/* Displaying Filters */}
          <div className="flex justify-between ">
            <p className="text-[16px] text-gray-600">Filter</p>
            <FilterIcon />
          </div>
          <div>
            {/* Product types */}
            <p className="text-[16px] text-black mt-5">Categories</p>
            <Categories types={categoryContent?.types} />
            <hr></hr>
          </div>
          {/* Price */}
          <PriceFilter />
          <hr></hr>
          {/* Colors */}
          <ColorsFilter colors={categoryContent?.meta_data?.colors} />
          <hr></hr>
          {/* Sizes */}
          <SizeFilter sizes={categoryContent?.meta_data?.sizes} />
        </div>

        <div className="p-[15px]">
          {/* Displaying Products */}
          {/* <p className="text-black text-lg">{categoryContent?.description}</p> */}
          <p className="text-black text-lg">{category?.description}</p>
          {/* Products */}
          <div className="pt-4 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 px-2">
            {/* {productListItems?.map((item, index) => ( */}
            {products?.map((item, index) => (
              <ProductCard
                key={item?.id + "_" + index}
                {...item}
                title={item?.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
