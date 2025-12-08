import React from "react";

const CardImage = ({ src, alt }) => {
  return <img src={src} alt={alt} style={styles.image} />;
};

const styles = {
  image: {
    width: "100%",
    height: "180px",
    borderRadius: "10px",
    objectFit: "cover",
  },
};

export default CardImage;
