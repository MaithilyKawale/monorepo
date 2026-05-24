import { useState } from "react";
import { RotateCcw, RotateCw } from "lucide-react";

import EmojiEditor from "../components/EmojiEditor.jsx";
import EmojiSection from "../components/EmojiSection.jsx";
import BackColor from "../components/Color.jsx";
import "tailwindcss";

export default function Home() {
  const [emoji, setEmoji] = useState("😊");
  const [bgColor, setBgColor] = useState("#B9B28A");
  const [size, setSize] = useState(50);
  const [angle, setAngle] = useState(0);

  return (
    <div className="min-h-screen w-full bg-[#F8F3D9] flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-center text-4xl md:text-5xl font-bold text-[#504B38] mb-4">
          Emoji Editor
        </h1>

        <p className="text-center text-lg md:text-xl text-gray-500 mb-8">
          Create your perfect emoji with endless customization options
        </p>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">

          {/* Preview */}
          <div className="flex justify-center">
            <EmojiEditor
              emoji={emoji}
              bgColor={bgColor}
              size={size}
              angle={angle}
            />
          </div>

          {/* Controls */}
          <div className="w-full max-w-md lg:max-w-lg
                bg-white p-6 rounded-2xl
                shadow-[0_20px_50px_rgba(0,0,0,0.12)]
                overflow-y-auto max-h-[500px]">

            {/* Emoji */}
            <p className="text-xl font-semibold text-gray-600 mb-2">
              Emoji
            </p>
            <hr className="mb-4" />
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {["🩷", "❤", "🧡", "💛", "💚", "🩵", "💙", "💜", "🖤", "🤍", "🤎"].map((e, i) => (
                <EmojiSection key={i} emoji={e} setEmoji={setEmoji} />
              ))}
            </div>

            <hr className="my-6" />

            {/* Background Color */}
            <p className="text-2xl text-gray-500 mb-3 font-semibold">Background Colors</p>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {[
                "#B9B28A", "#FFD97D", "#F7A072", "#A72703",
                "#B8C4A9", "#6FA4AF", "#A376A2", "#57564F",
                "#C0C9EE", "#F6F0F0", "#FDB7EA"
              ].map((color, i) => (
                <BackColor key={i} bgColor={color} setBgColor={setBgColor} />
              ))}
            </div>

            <hr className="my-6" />

            {/* Size */}
            <p className="text-2xl text-gray-500 mb-3 font-semibold">Size</p>
            <div className="flex flex-col items-center mb-6">
              <span className="mb-2 text-gray-500">{size}px</span>
              <input
                type="range"
                min="10"
                max="200"
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="w-full max-w-xs"
              />
            </div>

            <hr className="my-6" />

            {/* Rotate */}
            <p className="text-2xl text-gray-500 mb-3 font-semibold">Rotate</p>
            <div className="flex justify-center items-center gap-4">
              <RotateCcw
                size={32}
                className="cursor-pointer hover:text-gray-700 transition-colors"
                onClick={() => setAngle(angle - 45)}
              />
              <RotateCw
                size={32}
                className="cursor-pointer hover:text-gray-700 transition-colors"
                onClick={() => setAngle(angle + 45)}
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

