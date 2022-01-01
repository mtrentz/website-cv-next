import React from "react";
import DescriptionText from "../General/DescriptionText";

const AnimationCard = ({ title, description, link }) => {
  return (
    <div className="flex flex-row justify-between">
      {/* Text Part */}
      <div className="flex justify-center align-middle w-full">
        <DescriptionText cardTitle={title} cardDescription={description} />
      </div>

      {/* Animation Part */}
      <iframe
        className="w-[22rem] h-[22rem] px-1 pr-6"
        scrolling="no"
        frameborder="0"
        src={link}
      ></iframe>
    </div>
  );
};

export default AnimationCard;
