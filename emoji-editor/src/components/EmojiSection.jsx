function EmojiSection({ emoji, setEmoji }) {
  return (
    <button
      onClick={() => setEmoji(emoji)}
      className="text-[36px] p-2 rounded-full
                 hover:bg-gray-100
                 hover:scale-110
                 transition-all duration-200"
    >
      {emoji}
    </button>
  );
}

export default EmojiSection;


