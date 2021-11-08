import Link from "next/link";

const MenuMainSection = ({
  sectionTitle,
  sectionIcon,
  sectionHref,
  onClickFunc,
  onClickValue,
}) => {
  return (
    <div className="ml-4 my-0.5 lg:my-1 items-center">
      <Link href={sectionHref}>
        <a
          onClick={() => onClickFunc(onClickValue)}
          className="flex flex-row flex-nowrap items-center"
        >
          {sectionIcon}
          <span className="ml-1 hover:font-semibold  hover:text-gray-600">
            {sectionTitle}
          </span>
        </a>
      </Link>
    </div>
  );
};

export default MenuMainSection;
