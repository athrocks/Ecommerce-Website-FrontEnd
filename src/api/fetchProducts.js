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
