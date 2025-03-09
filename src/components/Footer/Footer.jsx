import React from "react";
import {FbIcon,InstaIcon} from "..";

function Footer({ content }) {
  return (
    <div className="bg-black text-white py-8">
      <div className="flex justify-around">
        {content?.items &&
          content?.items?.map((item, index) => {
            return (
              <div key={item?.title + index} className="flex flex-col">
                <p className="text-[16px] pb-[10px]">{item?.title}</p>
                {item?.list &&
                  item?.list?.map((listItem, index) => (
                    <a
                      key={index}
                      className="flex flex-col text-[12px] py-2"
                      href={listItem?.path}
                    >
                      {listItem?.label}
                    </a>
                  ))}
                {item?.description && <p>{item?.description}</p>}
              </div>
            );
          })}
      </div>
      <div className="flex gap-2 items-center justify-center py-4">
        <a href="/fb">
          <FbIcon />
        </a>
        <a href="/insta">
          <InstaIcon />
        </a>
      </div>
      <p className="text-sm text-white text-center content-center">
        {content?.copyright}
      </p>
    </div>
  );
}

export default Footer;
