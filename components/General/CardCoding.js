import CardCodingText from "./CardCodingText";

const CardCoding = ({ title, description, image, link, reverse }) => {
  return (
    <>
      {/* Segment */}
      <div
        className={`w-full flex flex-col px-2 lg:flex-row ${
          reverse ? "lg:flex-row-reverse" : null
        }`}
      >
        {/* Image Part */}
        <div className="flex justify-center py-1 lg:w-[30%]">
          <a
            href={link}
            className="w-[25vh] h-[25vh] rounded-full mx-auto border overflow-hidden items-center relative"
          >
            {image}
          </a>
        </div>

        <CardCodingText title={title} description={description} link={link} />
      </div>
    </>
  );
};

export default CardCoding;
