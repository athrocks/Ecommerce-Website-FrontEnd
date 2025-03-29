import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { saveToken } from "../utils/jwt-helper";

function OAuth2LoginCallback() {
  const navigate = useNavigate();

  useEffect(() => {

    console.log("hiiiiii from OAuth2LoginCallback.jsx"); // Debug log

    const params = new URLSearchParams(window.location.search);
    console.log("URL Params: ", window.location.search); // Debug log

    // const token = decodeURIComponent(params.get("token"));
    const token = params.get("token");

    if (token) {
      console.log("Received Token:", token); // Check if token is retrieved correctly
      saveToken(token);
      navigate("/");
    } else {
      console.log("Token not found, redirecting to login...");
      navigate("/v1/login");
    }
  }, [navigate]);
  return <div></div>;
}

export default OAuth2LoginCallback;
