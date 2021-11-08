import React from "react";
import DescriptionText from "./DescriptionText";

const CardDouble = ({
  cardImage,
  cardTitle,
  cardDescription,
  cardImageBig,
}) => {
  return (
    <div className="bg-white w-full h-[35vh] flex flex-row rounded-md shadow overflow-hidden md:col-span-2">
      {/* Logo and Description */}
      <div className="flex flex-col w-[40%]">
        {/* Image Part */}
        <div className="h-[50%] 2xl:h-[55%] flex justify-center items-center py-[5%]">
          <div className="h-[90%] w-[70%] relative">{cardImage}</div>
        </div>

        {/* Text Part */}
        <div className="h-[50%] 2xl:h-[45%]">
          <DescriptionText
            cardTitle={cardTitle}
            cardDescription={cardDescription}
          />
        </div>
      </div>

      {/* Big Image */}
      <div className="w-[60%] flex flex-row -space-x-1">
        {/* This is to simmulate a rounded corner of the logo and description part with the image on the bottom of it */}
        <div className="bg-white w-3 rounded-r-lg z-20"></div>
        <div className="flex z-10 w-full">{cardImageBig}</div>
      </div>
    </div>
  );
};

export default CardDouble;
