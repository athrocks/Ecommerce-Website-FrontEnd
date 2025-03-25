import axios from "axios";
import { API_BASE_URL, API_URLS } from "./constant";

export const getAllProducts = async (id, typeId) => {
  let url = API_BASE_URL + API_URLS.GET_PRODUCTS + `?categoryId=${id}`;

  if (typeId) {
    url += `&typeId=${typeId}`;
  }

  // console.log("Making API Call to:", url); // Debugging before request

  try {
    const result = await axios.get(url);
    // console.log("Fetched Products for:", id, result?.data); // Debugging API response
    return result?.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return null; // Return null to handle errors gracefully
  }
};

export const getProductBySlug = async (slug) => {
  const url = API_BASE_URL + API_URLS.GET_PRODUCTS + `?slug=${slug}`;
  
  console.log("Making API Call to in getProductBySlug:", url); // Debugging before request
  
  try {
    const result = await axios(url, {
      method: "GET",
    });
    console.log("Fetched Products for in getProductBySlug:", slug, result?.data); // Debugging API response
    return result?.data?.[0];
  } catch (err) {
    console.error(err);
  }
};
