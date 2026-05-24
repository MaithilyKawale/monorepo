function EmojiEditor({ emoji, bgColor, size, angle }) {
  return (
    <div
      className="h-[320px] w-[320px] md:h-[420px] md:w-[420px]
                 flex items-center justify-center
                 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.15)]
                 transition-all duration-300
                 border-4 border-gray-800"
      style={{ backgroundColor: bgColor }}
    >
      <span
        className="transition-transform duration-300 text-center"
        style={{
          fontSize: `${size}px`,
          transform: `rotate(${angle}deg)`,
          transformOrigin: 'center center'
        }}
      >
        {emoji}
      </span>
    </div>
  );
}

export default EmojiEditor;

