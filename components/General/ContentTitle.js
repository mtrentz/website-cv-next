import React from "react";

const ContentTitle = ({ title }) => {
  return (
    <div className="h-[8%] mt-[3%] flex items-end md:text-lg lg:text-xl xl:text-2xl">
      <span className="font-semibold ml-[5%]"> {title} </span>
    </div>
  );
};

export default ContentTitle;
