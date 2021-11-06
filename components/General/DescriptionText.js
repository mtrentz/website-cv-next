const DescriptionText = ({ cardTitle, cardDescription }) => {
  return (
    <div className="flex flex-col justify-center">
      {/* Title */}
      <p className="text-center md:text-base xl:text-lg 2xl:text-xl font-medium">
        {" "}
        {cardTitle}{" "}
      </p>
      {/* Description */}
      <p className="text-sm 2xl:text-lg text-center py-[3%] px-[3%]">
        {" "}
        {cardDescription}{" "}
      </p>
    </div>
  );
};

export default DescriptionText;
