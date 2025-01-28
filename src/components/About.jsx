/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { services } from "../constants"
import { fadeIn, staggerContainer, textVariant } from '../utils/motion' 

const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt className="sm:w-60 w-2/3">
      <motion.div
        variants={fadeIn("right", "spring", 0.25*index, 0.75)}
        className="w-full bg-gradient-to-r from-purple-900 p-0.5 rounded-2xl shadow-2xl"
      >
        <div className="flex flex-col items-center justify-center text-center sm:min-h-60 h-40">
          <img src={icon} alt={title} className="w-10 h-10" />
          <h3 className="text-lg font-medium mt-10">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <motion.section
      id="about"
      className="max-w-7xl p-6 mx-auto sm:py-20"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("","",0.1,1)}
        className="mt-4 text-gray-400 max-w-3xl leading-7"
      >
        I'm a web developer specializing in creating responsive, visually engaging, and user-centered websites. Proficient in HTML, CSS, Bootstrap, Tailwind, JavaScript, PHP, and MySQL, I enjoy designing full-stack solutions that blend functionality with aesthetics. Currently pursuing a B.Sc. (Hons.) in Computer Science at Delhi University, I am actively exploring new frameworks and technologies to expand my skill set and deliver innovative web solutions.
      </motion.p>
      <div className="sm:mt-20 mt-5 flex flex-wrap gap-10 justify-evenly items-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </motion.section>
  )
}

export default About