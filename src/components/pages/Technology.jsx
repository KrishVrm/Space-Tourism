import { React, useState } from "react";
import { motion } from "framer-motion";
import spaceport_img from "../../assets/technology/image-spaceport-portrait.jpg";
import capsule_img from "../../assets/technology/image-space-capsule-portrait.jpg";
import vehicle_img from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import tech_data from "../../technology-data.json";

const Technology = () => {
  const [tech, setTech] = useState("Space capsule");
  const [activeImg, setActiveImg] = useState(capsule_img);

  let name, description;
  tech_data.technology.map((e) => {
    if (tech == e.name) {
      name = e.name;
      description = e.description;
    }
  });

  return (
    <div className="main_wrapper technology_wrapper">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        exit={{ opacity: 0 }}
        className="container technology_container"
      >
        <div className="heading_and_rightContent">
          <div className="headings_container technology_headings_container">
            <h5 className="number_heading">03</h5>
            <h5>SPACE LAUNCH 101</h5>
          </div>

          <div className="right_content_container">
            <div className="tech_nav">
              <button
                onClick={() => {
                  setTech("Space capsule");
                  setActiveImg(capsule_img);
                  // setAnimate(!animate);
                }}
                className="circle_nav_btn"
                style={{
                  backgroundColor: tech == "Space capsule" ? "white" : "",
                  color: tech == "Space capsule" ? "black" : "",
                }}
              >
                1
              </button>
              <button
                onClick={() => {
                  setTech("Launch vehicle");
                  setActiveImg(vehicle_img);
                }}
                className="circle_nav_btn"
                style={{
                  backgroundColor: tech == "Launch vehicle" ? "white" : "",
                  color: tech == "Launch vehicle" ? "black" : "",
                }}
              >
                2
              </button>
              <button
                onClick={() => {
                  setTech("Spaceport");
                  setActiveImg(spaceport_img);
                }}
                className="circle_nav_btn"
                style={{
                  backgroundColor: tech == "Spaceport" ? "white" : "",
                  color: tech == "Spaceport" ? "black" : "",
                }}
              >
                3
              </button>
            </div>
            <motion.div
              // whileTap={{ scale: 2 }}
              // animate = {{}}
              // initial={{ opacity: 0 }}
              // animate={{ opacity: animate ? 0 : 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="content_container"
            >
              <h6>THE TERMINOLOGY...</h6>
              <h3>{name}</h3>
              <div className="body_text">{description}</div>
            </motion.div>
          </div>
        </div>
        <div
          className="content_image"
          style={{ backgroundImage: `url(${activeImg})` }}
        ></div>
      </motion.section>
    </div>
  );
};

export default Technology;
