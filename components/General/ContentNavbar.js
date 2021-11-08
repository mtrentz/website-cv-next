const ContentNavbar = ({ navbarLinks, handleClick }) => {
  return (
    <nav className="h-[3%] pl-[7%] mb-[3%] pt-[1%] 2xl:pl-[12%] flex flex-row gap-5 items-end">
      {navbarLinks.map((link) => (
        <div key={link.id} className="group flex flex-col justify-center">
          <p className="pb-[2px] text-main lg:text-terciary lg:group-hover:text-main text-xs text-center transition duration-500 ease-in-out md:text-sm lg:text-base 2xl:text-lg">
            {" "}
            {link.name}{" "}
          </p>
          <button
            key={link.id}
            onClick={() => handleClick(link.name)}
            className={`${
              link.selected ? "bg-secondary" : "bg-accent"
            } h-2 w-20 rounded-full md:h-3 md:w-24`}
          ></button>
        </div>
      ))}
    </nav>
  );
};

export default ContentNavbar;
