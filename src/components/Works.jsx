/* eslint-disable react/prop-types */
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { github } from "../assets"
import { projects, projectsText } from "../constants"
import { fadeIn, staggerContainer, textVariant } from "../utils/motion"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <Tilt
      className=""
      options = {{
        scale: 1.01
      }}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.25*index, 0.75)}
        className="w-full bg-gradient-to-r from-purple-900 rounded-2xl shadow-2xl p-5 h-[480px] overflow-hidden"
      >
        <div className="sm:h-48 h-36 w-full relative">
          <img src={image} alt={name} className="w-full h-full object-fill rounded-2xl" />
          <a href={source_code_link} target="_blank" className="absolute p-2 bg-black rounded-full right-1 top-1">
            <img src={github} alt="GitHub logo" className="w-5 h-5" />
          </a>
        </div>
        <div className="mt-5">
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="mt-2 text-gray-300 text-sm">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-sm ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </motion.div>
    </Tilt>
  )
}

const Works = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <motion.section
      id="work"
      className="max-w-7xl p-6 mx-auto sm:py-20"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("","",0.1,1)}
        className="mt-4 text-gray-400 max-w-3xl leading-7"
      >
        {projectsText}
      </motion.p>
      <div className="sm:mt-20 mt-5 sm:px-6 px-2">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={`project-${index}`} className="w-92 p-4">
              <ProjectCard index={index} {...project} />
            </div>
          ))}
        </Slider>
      </div>
    </motion.section>
  )
}

export default Works