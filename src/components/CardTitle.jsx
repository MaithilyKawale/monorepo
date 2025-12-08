import React from "react";

const CardTitle = ({ text }) => {
  return <h2 style={styles.title}>{text}</h2>;
};

const styles = {
  title: {
    fontSize: "20px",
    marginTop: "10px",
  },
};

export default CardTitle;
