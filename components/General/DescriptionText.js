const DescriptionText = ({ cardTitle, cardDescription }) => {
  return (
    <div className="flex flex-col justify-center align-middle w-full">
      {/* Title */}
      <p className="text-center font-semibold px-[2%]"> {cardTitle} </p>
      {/* Description */}
      <p className="text-sm text-center py-[3%] px-[3%] 2xl:text-lg">
        {cardDescription}
      </p>
    </div>
  );
};

export default DescriptionText;
