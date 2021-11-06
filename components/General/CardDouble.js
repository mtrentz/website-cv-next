import React from "react";
import DescriptionText from "./DescriptionText";

const CardDouble = ({
  cardImage,
  cardTitle,
  cardDescription,
  cardImageBig,
}) => {
  return (
    <div className="bg-white w-[80%] flex flex-row rounded-md shadow overflow-hidden">
      {/* Logo and Description */}
      <div className="flex flex-col w-[40%]">
        {/* Image Part */}
        <div className="h-[60%] flex justify-center py-[5%]">{cardImage}</div>

        {/* Text Part */}
        <div className="p-1">
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
