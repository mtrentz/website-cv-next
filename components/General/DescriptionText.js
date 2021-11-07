const DescriptionText = ({ cardTitle, cardDescription }) => {
  return (
    <div className="flex flex-col justify-center">
      {/* Title */}
      <p className="text-center font-semibold"> {cardTitle} </p>
      {/* Description */}
      <p className="text-sm text-center py-[3%] px-[3%]"> {cardDescription} </p>
    </div>
  );
};

export default DescriptionText;
