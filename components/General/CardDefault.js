import DescriptionText from "./DescriptionText";

const CardDefault = ({ cardImage, cardTitle, cardDescription }) => {
  return (
    <div className="bg-white w-[50%] flex flex-col rounded-md shadow p-[2%]">
      {/* Image Part */}
      <div className="h-[60%] flex justify-center py-[5%]">{cardImage}</div>

      {/* Text Part */}
      <div>
        <DescriptionText
          cardTitle={cardTitle}
          cardDescription={cardDescription}
        />
      </div>
    </div>
  );
};

export default CardDefault;
