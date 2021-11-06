import Link from "next/link";

const MenuMainSection = ({
  sectionTitle,
  sectionIcon,
  sectionHref,
  toggleSidebar,
}) => {
  return (
    <div className="ml-4 my-0.5 items-center">
      <Link href={sectionHref}>
        <a
          onClick={toggleSidebar}
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

export default MenuMainSection;
