/* eslint-disable react/prop-types */
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { github } from "../assets"
import { projects } from "../constants"
import { fadeIn, staggerContainer, textVariant } from "../utils/motion"

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <Tilt className="w-92">
      <motion.div
        variants={fadeIn("right", "spring", 0.25*index, 0.75)}
        className="w-full bg-gradient-to-r from-purple-900 rounded-2xl shadow-2xl p-5"
      >
        <div className="h-48 w-full relative ">
          <img src={image} alt={name} className="w-full h-full object-fill rounded-2xl" />
          <a href={source_code_link} target="_blank" className="absolute p-2 bg-black rounded-full right-4 top-4">
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
  return (
    <motion.section
      id="work"
      className="max-w-7xl p-6 mx-auto sm:spy-20"
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
        Showcasing a collection of responsive and dynamic web projects built with a focus on functionality, aesthetics, and seamless user experience. These projects utilize technologies like HTML, CSS, JavaScript, Node, React, PHP, MySQL, Bootstrap, and Tailwind to deliver modern and scalable solutions. Each work highlights a commitment to clean design, efficient performance, and innovative problem-solving tailored to diverse use cases.
      </motion.p>
      <div className="sm:mt-20 mt-5 flex flex-wrap gap-10 justify-evenly items-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </motion.section>
  )
}

export default Works