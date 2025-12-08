import React from "react";
import CardImage from "./CardImage";
import CardTitle from "./CardTitle";
import CardDescription from "./CardDescription";

const Card = ({ title, description, imageUrl }) => {
  return (
    <div style={styles.card}>
      <CardImage src={imageUrl} alt={title} />
      <CardTitle text={title} />
      <CardDescription text={description} />
    </div>
  );
};

const styles = {
  card: {
    width: "300px",
    border: "1px solid #ccc",
    borderRadius: "12px",
    padding: "15px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
};

export default Card;
