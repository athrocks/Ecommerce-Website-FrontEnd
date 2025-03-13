import React from "react";

function CartIcon() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      className="hover:fill-black"
      // style={{ backgroundColor: `${bgColor ? bgColor : ""}` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* {!bgColor && <rect width="44" height="44" rx="8" fill="white" />} */}

      {/* added myself --> remove after done */}
      <rect width="44" height="44" rx="8" fill="white" />
      <path
        d="M14.5 15.3333H15.0053C15.8558 15.3333 16.5699 15.9737 16.6621 16.8192L17.3379 23.014C17.4301 23.8595 18.1442 24.4999 18.9947 24.4999H26.205C26.9669 24.4999 27.6317 23.9833 27.82 23.2451L28.9699 18.7358C29.2387 17.682 28.4425 16.6573 27.355 16.6573H17.5M17.5206 27.5207H18.1456M17.5206 28.1457H18.1456M26.6873 27.5207H27.3123M26.6873 28.1457H27.3123M18.6667 27.8333C18.6667 28.2935 18.2936 28.6666 17.8333 28.6666C17.3731 28.6666 17 28.2935 17 27.8333C17 27.373 17.3731 26.9999 17.8333 26.9999C18.2936 26.9999 18.6667 27.373 18.6667 27.8333ZM27.8333 27.8333C27.8333 28.2935 27.4602 28.6666 27 28.6666C26.5398 28.6666 26.1667 28.2935 26.1667 27.8333C26.1667 27.373 26.5398 26.9999 27 26.9999C27.4602 26.9999 27.8333 27.373 27.8333 27.8333Z"
        // stroke={bgColor ? "white" : "#2A2F2F"}

        // added myself remove after done only next line
        stroke="#2A2F2F"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default CartIcon;
