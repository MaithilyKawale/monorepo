import React from "react";
import PreviewBox from "./components/PreviewBox.jsx";
import "./index.css";


export default function App() {
    return (
        <div className="min-h-screen bg-[#F8F3D9] flex items-center justify-center" style={{
        background: "linear-gradient(135deg, #7b8ddc, #f9c0ec)"
      }}>
            <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl p-6 md:p-10">
                <PreviewBox />
            </div>
        </div>
    );
}
