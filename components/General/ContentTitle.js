import React from "react";

const ContentTitle = ({ title }) => {
  return (
    <div className="h-[8%] mt-[3%] flex items-end">
      <span className="font-semibold ml-[5%]"> {title} </span>
    </div>
  );
};

export default ContentTitle;
