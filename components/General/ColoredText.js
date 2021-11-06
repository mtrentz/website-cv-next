const ColoredText = ({ c, t }) => {
  return (
    <span className="font-semibold" style={{ color: c }}>
      {t}
    </span>
  );
};

export default ColoredText;
