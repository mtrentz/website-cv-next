import Link from "next/link";

const MenuSubSection = ({
  sectionTitle,
  sectionIcon,
  sectionHref,
  onClickFunc,
  onClickValue,
}) => {
  return (
    <div className="ml-6 my-0.5 items-center text-md">
      <Link href={sectionHref}>
        <a
          onClick={() => onClickFunc(onClickValue)}
          className="flex flex-row flex-nowrap items-center"
        >
          {sectionIcon}
          <span className="ml-1 hover:font-medium hover:text-gray-600">
            {" "}
            {sectionTitle}{" "}
          </span>
        </a>
      </Link>
    </div>
  );
};

export default MenuSubSection;
