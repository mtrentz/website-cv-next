import CardCodingText from "./CardCodingText";

const CardCoding = ({ title, description, image, link, reverse }) => {
  return (
    <>
      {/* Segment */}
      <div className="w-full flex flex-col px-2">
        {/* TODO: Usar o reverse no HTML depois quando for inverter as ordems em telas medias/grandes */}

        {/* Image Part */}
        <div className="flex justify-center py-1">
          <a
            href={link}
            className="w-[40%] rounded-full mx-auto border overflow-hidden items-center"
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
