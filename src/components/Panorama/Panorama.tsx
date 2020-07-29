// @ts-nocheck
import React from "react";
import "./Panorama.css";

type PanoramaProps = {};

const Panorama: React.FC<PanoramaProps> = () => {
  return (
    <section id="panorama">
      {/* <figure></figure> */}
      <img width="100%" src={require("../../assets/pano.gif")} alt="Loading" />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            marginTop: 12,
            border: "1px solid black",
            borderRadius: 4,
            width: 222,
            height: 8,
            backgroundColor: "gainsborough",
          }}
        ></div>
      </div>
    </section>
  );
};

export default Panorama;
