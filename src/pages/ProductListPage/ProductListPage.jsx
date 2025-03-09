import React, { useMemo } from "react";
import {
  Categories,
  ColorsFilter,
  FilterIcon,
  PriceFilter,
  SizeFilter,
} from "../../components";
import content from "../../data/content.json";

const categories = content?.categories;

const ProductListPage = ({ categoryType }) => {
  const categoryContent = useMemo(() => {
    return categories?.find((category) => category.code === categoryType);
  }, [categoryType]);

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
            {/* <Categories types={categoryContent?.types} /> */}
            <hr></hr>
          </div>
          {/* Price */}
          {/* <PriceFilter /> */}
          <hr></hr>
          {/* Colors */}
          {/* <ColorsFilter colors={categoryContent?.meta_data?.colors} /> */}
          <hr></hr>
          {/* Sizes */}
          {/* <SizeFilter sizes={categoryContent?.meta_data?.sizes} /> */}
        </div>
        <div className="p-[15px]">
          {/* Displaying Products */}
          <p className="text-black text-lg">
            {categoryContent?.description}
          </p>
          {/* Products */}
          {/* <div className="pt-4 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 px-2">
            {products?.map((item, index) => (
              <ProductCard
                key={item?.id + "_" + index}
                {...item}
                title={item?.name}
              />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
