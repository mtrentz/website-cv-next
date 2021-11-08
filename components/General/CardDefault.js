import DescriptionText from "./DescriptionText";

const CardDefault = ({ cardImage, cardTitle, cardDescription }) => {
  return (
    <div className="bg-white w-1/2 md:w-full h-[35vh] flex flex-col rounded-md shadow p-[2%] ">
      {/* Image Part */}
      <div className="h-[50%] 2xl:h-[55%] flex justify-center py-2">
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
  );
};

export default CardDefault;
