import React, { useState } from "react";
import Carrousel from "../Carrousel/Carrousel";
import CategoryContainer from "../Cards/categoryContainer";
import "../../Views/Home/Home.css"

import oferta1 from "../../Imgs/oferta1.jpeg";
import oferta2 from "../../Imgs/oferta2.png";

const HomeAdmin = () => {

  const [imagesLoaded, setImagesLoaded] = useState(false);
  const handleImageLoad = () => {
    setImagesLoaded(true);
  };
return (
    <div className="ContainerHome">
      {!imagesLoaded && (
        <div
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2>Loading...</h2>
        </div>
      )}
      {imagesLoaded && (
        <>
          <Carrousel />
          <CategoryContainer />
        </>
      )}
      <img
        src={oferta1}
        alt=""
        style={{ display: "none" }}
        onLoad={handleImageLoad}
      />
      <img
        src={oferta2}
        alt=""
        style={{ display: "none" }}
        onLoad={handleImageLoad}
      />
    </div>
  );
}

export default HomeAdmin