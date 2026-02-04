import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main_wrapper home_wrapper">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="container"
      >
        <div className="content_container">
          <h5 style={{ color: "#d0d6f9" }}>So, you want to travel to</h5>
          <h1>SPACE</h1>
          <p className="body_text">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link to="/destination">
          <button className="landing_page_btn">EXPLORE</button>
        </Link>
      </motion.section>
    </div>
  );
};

export default Home;
