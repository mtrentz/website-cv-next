const ContentNavbar = ({ navbarLinks, handleClick }) => {
  return (
    <nav className="">
      {navbarLinks.map((link) => (
        <button key={link.id} onClick={() => handleClick(link.id)}>
          {" "}
          {link.name}{" "}
        </button>
      ))}
    </nav>
  );
};

export default ContentNavbar;
