const ContentNavbar = ({ navbarLinks, handleClick }) => {
  return (
    <nav className="h-[3%] pl-[7%] mb-[3%] 2xl:pl-[12%] flex flex-row gap-5 items-end">
      {navbarLinks.map((link) => (
        <div className="group flex flex-col justify-center">
          <p className="text-main md:text-terciary md:group-hover:text-main text-xs text-center transition duration-500 ease-in-out">
            {" "}
            {link.name}{" "}
          </p>
          <button
            key={link.id}
            onClick={() => handleClick(link.id)}
            className={`${
              link.selected ? "bg-secondary" : "bg-accent"
            } h-2 w-20 rounded-full`}
          ></button>
        </div>
      ))}
    </nav>
  );
};

export default ContentNavbar;
