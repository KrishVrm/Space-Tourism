import { useState } from "react";
import bgImg from "../../assets/destination/background-destination-desktop.jpg";
import data from "../../data.json";
import moon_img from "../../assets/destination/image-moon.png";
import europa_img from "../../assets/destination/image-europa.png";
import titan_img from "../../assets/destination/image-titan.png";
import mars_img from "../../assets/destination/image-mars.png";
import { motion } from "framer-motion";

const Destination = () => {
  const [planet, setPlanet] = useState("Moon");
  const [activeImg, setActiveImg] = useState(moon_img);
  let name, description, distance, travel, img;

  data.destinations.map((e) => {
    if (planet == e.name) {
      name = e.name;
      description = e.description;
      distance = e.distance;
      travel = e.travel;
    }
  });

  return (
    <div
      className="main_wrapper destination_wrapper"
      style={
        {
          // backgroundImage: `url(${bgImg})`,
        }
      }
    >
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        exit={{ opacity: 0 }}
        className="container destination_container"
      >
        <div className="heading_and_img">
          <div className="headings_container">
            <h5 className="number_heading">01</h5>
            <h5>PICK YOUR DESTINATION</h5>
          </div>
          <div
            className="planet_img"
            style={{ backgroundImage: `url(${activeImg})` }}
          ></div>
        </div>
        <div className="planet_content_container">
          <div className="planets_nav">
            <button
              onClick={() => {
                setPlanet("Moon");
                setActiveImg(moon_img);
              }}
              className={planet == "Moon" ? "active_navlink" : "nav_links"}
            >
              MOON
            </button>
            <button
              onClick={() => {
                setPlanet("Mars");
                setActiveImg(mars_img);
              }}
              className={planet == "Mars" ? "active_navlink" : "nav_links"}
            >
              MARS
            </button>
            <button
              onClick={() => {
                setActiveImg(europa_img);
                setPlanet("Europa");
              }}
              className={planet == "Europa" ? "active_navlink" : "nav_links"}
            >
              EUROPA
            </button>
            <button
              onClick={() => {
                setPlanet("Titan");
                setActiveImg(titan_img);
              }}
              className={planet == "Titan" ? "active_navlink" : "nav_links"}
            >
              TITAN
            </button>
          </div>
          <h2>{name}</h2>
          <p className="body_text">{description}</p>
          <hr />
          <div className="planet_info_container">
            <div className="info_box">
              <p className="subHeading_2">AVG. DISTANCE</p>
              <p className="subHeading_1">{distance}</p>
            </div>
            <div className="info_box">
              <p className="subHeading_2">EST. TRAVEL TIME</p>
              <p className="subHeading_1">{travel}</p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Destination;
