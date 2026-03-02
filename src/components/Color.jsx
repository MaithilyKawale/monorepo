function BackColor({ bgColor, setBgColor }) {
  return (
    <div
      onClick={() => setBgColor(bgColor)}
      className="h-10 w-10 rounded-lg cursor-pointer
                 shadow-md border border-white
                 hover:scale-110 transition-all duration-200"
      style={{ backgroundColor: bgColor }}
    />
  );
}

export default BackColor;
