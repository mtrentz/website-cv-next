const CardDataViz = ({ vizzesData }) => {
  return (
    <div className="w-full py-5 items-center flex flex-col justify-start gap-4">
      {vizzesData.map((vizData) => (
        // Card
        <div
          key={vizData.id}
          className="bg-white w-[90%] h-[28vh] md:h-[20vh] lg:h-[18vh] rounded-xl flex flex-row overflow-hidden shadow-lg"
        >
          {/* Text Part */}
          <div className=" w-[45%] p-5 overflow-auto py-2 flex flex-col object-center justify-center">
            {/* Title */}
            <div className="h-[30%] flex items-center justify-center">
              <p className="font-semibold text-center"> {vizData.title} </p>
            </div>
            {/* Description */}
            <div className="flex flex-col justify-center mt-1">
              <p className="text-center">{vizData.description}</p>
            </div>
          </div>
          {/* Image Part */}
          <a
            href={vizData.link}
            className="w-[55%] -space-x-1 z-10 flex flex-row"
          >
            {/* This is to simmulate a rounded corner of the logo and description part with the image on the bottom of it */}
            <div className="bg-white w-2 rounded-r-lg z-20"></div>
            <div className="h-full w-full flex flex-grow opacity-80 relative">
              {vizData.image}
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default CardDataViz;
