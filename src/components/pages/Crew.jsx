import { useState } from "react";
import crew_data from "../../crew-data.json";
import { motion } from "framer-motion";

const Crew = () => {
  const [crew, setCrew] = useState("Commander");
  let name, post, description, image;

  crew_data.crew.map((e) => {
    if (crew == e.post) {
      name = e.name;
      description = e.description;
      post = e.post;
      image = e.image;
    }
  });

  console.log(image);

  return (
    <div className="main_wrapper crew_wrapper">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        exit={{ opacity: 0 }}
        className="container crew_container"
      >
        <div className="left_content_container">
          <div className="headings_container">
            <h5 className="number_heading">02</h5>
            <h5>MEET YOUR CREW</h5>
          </div>
          <h4>{post}</h4>
          <h3>{name}</h3>
          <p className="body_text">{description}</p>
          <div className="crew_nav">
            <button
              onClick={() => {
                setCrew("Commander");
              }}
              className="circle_nav_btn"
              style={{ opacity: crew == "Commander" ? 1 : "" }}
            ></button>
            <button
              onClick={() => {
                setCrew("Flight Engineer");
              }}
              className="circle_nav_btn"
              style={{ opacity: crew == "Flight Engineer" ? 1 : "" }}
            ></button>
            <button
              onClick={() => {
                setCrew("Pilot");
              }}
              className="circle_nav_btn"
              style={{ opacity: crew == "Pilot" ? 1 : "" }}
            ></button>
            <button
              onClick={() => {
                setCrew("Mission Specialist");
              }}
              className="circle_nav_btn"
              style={{ opacity: crew == "Mission Specialist" ? 1 : "" }}
            ></button>
          </div>
        </div>
        <div
          className="crew_img"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </motion.section>
    </div>
  );
};

export default Crew;
