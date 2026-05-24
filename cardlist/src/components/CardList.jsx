import React, { useState } from "react";
import Card from "./Card";

const CardList = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Mountain Adventure",
      description: "Experience the serenity of nature.",
      imageUrl: "https://picsum.photos/300/200?random=1",
    },
    {
      id: 2,
      title: "Beach Paradise",
      description: "Relax near crystal-clear waters.",
      imageUrl: "https://picsum.photos/300/200?random=2",
    },
    {
      id: 3,
      title: "City Lights",
      description: "Explore the vibrant nightlife.",
      imageUrl: "https://picsum.photos/300/200?random=3",
    },
    {
      id: 4,
      title: "Forest Escape",
      description: "Discover peaceful forest trails.",
      imageUrl: "https://picsum.photos/300/200?random=4",
    },
    {
      id: 5,
      title: "Desert Dunes",
      description: "Adventure through golden sands.",
      imageUrl: "https://picsum.photos/300/200?random=5",
    },
  ]);

  return (
    <div style={styles.container}>
      {cards.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "20px",
  },
};

export default CardList;
