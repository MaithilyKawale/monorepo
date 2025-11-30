import React, { useState } from 'react';
import "../views/Home.css"

function Home() {

    const { emojis, setEmojis } = useState(['😀']);
    return (
        <div className='<div className="min-h-screen w-full relative">
  {/* Cotton Candy Sky Gradient - Opposite Direction */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: `linear-gradient(225deg, #FFB3D9 0%, #FFD1DC 20%, #FFF0F5 40%, #E6F3FF 60%, #D1E7FF 80%, #C7E9F1 100%)`,
    }}
  />
  {/* Your Content/Components */}
</div>'>
            <h1>Playing with emojis using <span>usestate</span></h1>
            <div>
                {emojis}
            </div>
        </div>

    )

}

export default Home;