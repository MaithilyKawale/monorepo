import React from "react";

const CardDescription = ({ text }) => {
  return <p style={styles.description}>{text}</p>;
};

const styles = {
  description: {
    fontSize: "15px",
    color: "#555",
  },
};

export default CardDescription;
